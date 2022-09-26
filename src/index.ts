import { Board } from "./entities/board";
import { Matrix } from "./entities/matrix";
import { Coordinate } from "./entities/coordinate";
import { Nodex } from "./entities/nodex";
import { Neighbor } from "./entities/neighbor";

function main() {
    const matrix = new Matrix(5,5)
    const board = new Board(matrix)
    const initialCoordinate = new Coordinate(1,2)
    const targetCoordinate = new Coordinate(4,0)

    board.setInitial(initialCoordinate)
    board.setTarget(targetCoordinate)

    let initial = board.getNodexByCoordinate(initialCoordinate)
    let target = board.getNodexByCoordinate(targetCoordinate)

    let listaAbertos = [initial] 
    let listaFechados = []

    let contador = 0;
    while(contador < 100){
        contador++;

        console.log('======================')
        console.log('Iniciou um novo ciclo')
        let nodoAtual = listaAbertos[0]
        console.log('Nodo atual: ', nodoAtual)
        console.log('Coordenadas iniciais: ', nodoAtual.getCoordinate().x, nodoAtual.getCoordinate().y)

        console.log('Verificando objetivo')
        if(nodoAtual.getCoordinate().x === target.getCoordinate().x && nodoAtual.getCoordinate().y === target.getCoordinate().y){
            console.log('Atingimos o objetivo')
            console.log('Quantidade de iterações: ', contador)
            return
        }
        console.log('Não atingimos o objetivo :(')

        const vizinhos = nodoAtual.getNeighbors()
        console.log('Encontramos os vizinhos')
        const vizinhosValidos = vizinhos.filter((item) => { return board.exists(item.nodex.getCoordinate()) })
        console.log('Filtramos pelos vizinhos válidos')

        for (let index = 0; index < vizinhosValidos.length; index++) {
            vizinhosValidos[index].nodex.setTarget(targetCoordinate)
            vizinhosValidos[index].nodex.calculateTargetDistance()
            console.log('Calculamos o custo para atingir o objeitvo do vizinho: ', vizinhosValidos[index].nodex.getCoordinate().x, vizinhosValidos[index].nodex.getCoordinate().y);
        }
        
        console.log('Ordenando os vizinhos')
        let listaOrdenada = vizinhosValidos.sort((item1 : Neighbor, item2 : Neighbor) => {
            if(item1.nodex.getTargetDistance() > item2.nodex.getTargetDistance()){
                return 1
            }
            if(item1.nodex.getTargetDistance() < item2.nodex.getTargetDistance()){
                return -1
            }
            return 0
        })
        console.log('Selecionando o mais próximo: ', listaOrdenada[0].nodex)
        let nodoMaisProximo =listaOrdenada[0].nodex
        
        //initial = board.getNodexByCoordinate(maisProximo.getCoordinate())
        console.log('Incluimos o atual na lista de fechados')
        listaFechados.push(nodoAtual)
        console.log('Removemos o atual da lista de abertos')
        console.log('Lista abertos antes: ', listaAbertos)
        listaAbertos.shift()
        console.log('Lista abertos depois: ', listaAbertos)
        
        console.log('Incluimos os novos vizinhos na lista de abertos')
        for (let index = 0; index < listaOrdenada.length; index++) {
            const element = listaOrdenada[index];
            console.log('Lista de abertos', listaOrdenada[index].nodex.getCoordinate())
            listaAbertos.push(element.nodex)
        }

        listaAbertos = listaAbertos.sort((item1 : Nodex, item2 : Nodex) => {
            if(item1.getTargetDistance() > item2.getTargetDistance()){
                return 1
            }
            if(item1.getTargetDistance() < item2.getTargetDistance()){
                return -1
            }
            return 0
        })
        console.log(listaAbertos)
    }
    // const vizinhoDaEsquerda = board.getNodexByCoordinate(nodoAtual.getLeftNeighborCoordinate())
    // const vizinhoDaDireita = board.getNodexByCoordinate(nodoAtual.getRightNeighborCoordinate())
    // const vizinhoDeCima = board.getNodexByCoordinate(nodoAtual.getUpNeighborCoordinate())
    // const vizinhoDeBaixo = board.getNodexByCoordinate(nodoAtual.getBottomNeighborCoordinate())
    
    // console.log('Coordenadas do alvo: ', board.getTarget().getCoordinate().x, board.getTarget().getCoordinate().y)
    // console.log('Coordenadas do vizinho da direita: ', vizinhoDaDireita.getCoordinate().x, vizinhoDaDireita.getCoordinate().y)
    // console.log('Calcular a distancia ao alvo do vizinho da direita', vizinhoDaDireita.getTargetDistance())
}

main()
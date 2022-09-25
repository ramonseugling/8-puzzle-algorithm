import { Board } from "./entities/board";
import { Matrix } from "./entities/matrix";
import { Coordinate } from "./entities/coordinate";
import { Nodex } from "./entities/nodex";

function main() {
    const matrix = new Matrix(5,5)
    const board = new Board(matrix)
    const initialCoordinate = new Coordinate(1,2)
    const targetCoordinate = new Coordinate(4,4)
    const listaFechada: Nodex[]
    const listaAberta: Nodex[]

    board.setInitial(initialCoordinate)
    board.setTarget(targetCoordinate)

    let initial = board.getNodexByCoordinate(initialCoordinate)
    let target = board.getNodexByCoordinate(targetCoordinate)

    while(true){
        console.log('Iniciou um novo ciclo')
        console.log(initial.getCoordinate().x)
        console.log(initial.getCoordinate().y)

        if(initial.getCoordinate().x === target.getCoordinate().x && initial.getCoordinate().y === target.getCoordinate().y){
            console.log('Atingimos o objetivo')
            return
        }

        const vizinhos = initial.getNeighbors();
        const vizinhosValidos = vizinhos.filter((item) => { return board.exists(item.nodex.getCoordinate()) })
        let maisProximo = vizinhosValidos[0].nodex

        for (let index = 0; index < vizinhosValidos.length; index++) {
            vizinhosValidos[index].nodex.setTarget(targetCoordinate);
            vizinhosValidos[index].nodex.calculateTargetDistance();
            const distanciaCalculada = vizinhosValidos[index].nodex.getTargetDistance()
            if(maisProximo.getTargetDistance() && maisProximo.getTargetDistance() > distanciaCalculada){
                maisProximo = vizinhosValidos[index].nodex
            }
        }

        initial = board.getNodexByCoordinate(maisProximo.getCoordinate())
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
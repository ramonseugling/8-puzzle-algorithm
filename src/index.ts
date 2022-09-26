import { Board } from "./entities/board";
import { Coordinate } from "./entities/coordinate";
import { Nodex } from "./entities/nodex";

function main() {
    const board = new Board(5/**Width */,5/**Heigh */, new Coordinate(1,2) /**Initial */, new Coordinate(4,0) /**Target */)

    const initial = board.getNodexByCoordinate(board.getInitial())
    initial.setTarget(board.getTarget())

    let listaAbertos = [initial] 
    let listaFechados = []

    let contador = 0
    while(contador < 100){
        let nodoAtual = listaAbertos[0]

        if(nodoAtual.getCoordinate().x === board.getTarget().x && nodoAtual.getCoordinate().y === board.getTarget().y){
            console.log('Atingimos o objetivo')
            console.log('Quantidade de iterações: ', contador)
            return
        }

        const vizinhos = nodoAtual.getNeighbors()
        const vizinhosValidos = vizinhos.filter((item) => { return board.exists(item.nodex.getCoordinate()) })

        for (let index = 0; index < vizinhosValidos.length; index++) {
            vizinhosValidos[index].nodex.setTarget(board.getTarget())
            listaAbertos.push(vizinhosValidos[index].nodex)
        }

        listaFechados.push(listaAbertos.shift())

        listaAbertos = listaAbertos.sort((item1 : Nodex, item2 : Nodex) => {
            if(item1.getTargetDistance() > item2.getTargetDistance()){
                return 1
            }
            if(item1.getTargetDistance() < item2.getTargetDistance()){
                return -1
            }
            return 0
        })
        contador++
    }
}

main()
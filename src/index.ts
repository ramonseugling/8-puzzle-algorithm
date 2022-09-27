import { Board } from "./entities/board";
import { ClosedList } from "./entities/closed-list";
import { Coordinate } from "./entities/coordinate";
import { Node } from "./entities/node";
import { OpenList } from "./entities/open-list";
import { ProgramParams } from "./entities/program-params";

function getProgramParams() : ProgramParams{
    return {
        initialCoordinate: new Coordinate(1,2),
        targetCoordinate: new Coordinate(4,2),
        boardMatrix: { width: 5, heigh: 5 }
    }
}

function main() {
    const { initialCoordinate, targetCoordinate, boardMatrix } = getProgramParams()
    const board = new Board(boardMatrix)
    const initial = board.getNodeByCoordinate(initialCoordinate)
    initial.setTarget(targetCoordinate)
    const target = board.getNodeByCoordinate(targetCoordinate)
    const openList = new OpenList(initial)
    const closedList = new ClosedList()
    let current : Node

    do{
        current = openList.getFirst()
      
        let neighbors = current.getNeighbors()
        neighbors = neighbors.filter((item) => { return board.hasNodeByCoordinate(item.node.getCoordinate()) })

        for (let index = 0; index < neighbors.length; index++) {
            neighbors[index].node.setTarget(target.getCoordinate())
            openList.add(neighbors[index].node)
        }
        closedList.add(openList.exitFirst())
        openList.sort()
    }while(!(current.getCoordinate().getXAxis() === target.getCoordinate().getXAxis()
        && current.getCoordinate().getYAxis() === target.getCoordinate().getYAxis()))
    console.log('Atingimos o objetivo')
    console.log('Quantidade de iterações: ', closedList.getNodes().length - 1)
}

main()
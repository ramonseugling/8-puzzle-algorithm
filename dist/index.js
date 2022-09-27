"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const board_1 = require("./entities/board");
const closed_list_1 = require("./entities/closed-list");
const coordinate_1 = require("./entities/coordinate");
const open_list_1 = require("./entities/open-list");
function getProgramParams() {
    return {
        initialCoordinate: new coordinate_1.Coordinate(2, 0),
        targetCoordinate: new coordinate_1.Coordinate(0, 2),
        boardMatrix: { width: 3, heigh: 3 }
    };
}
function main() {
    const { initialCoordinate, targetCoordinate, boardMatrix } = getProgramParams();
    const board = new board_1.Board(boardMatrix);
    const initial = board.getNodeByCoordinate(initialCoordinate);
    initial.setTarget(targetCoordinate);
    const target = board.getNodeByCoordinate(targetCoordinate);
    const openList = new open_list_1.OpenList(initial);
    const closedList = new closed_list_1.ClosedList();
    let current;
    do {
        current = openList.getFirst();
        board.show(current.getCoordinate(), target.getCoordinate());
        let neighbors = current.getNeighbors();
        neighbors = neighbors.filter((item) => {
            return board.hasNodeByCoordinate(item.node.getCoordinate());
        });
        for (let index = 0; index < neighbors.length; index++) {
            neighbors[index].node.setTarget(target.getCoordinate());
            openList.add(neighbors[index].node);
        }
        closedList.add(openList.exitFirst());
        openList.sort();
    } while (!(current.getCoordinate().getXAxis() === target.getCoordinate().getXAxis() &&
        current.getCoordinate().getYAxis() === target.getCoordinate().getYAxis()));
    console.log('Atingimos o objetivo');
    console.log('Quantidade de iterações: ', closedList.getNodes().length - 1);
    console.log('Quantidad de nodos visitados: ', closedList.getNodes().length);
}
main();
//# sourceMappingURL=index.js.map
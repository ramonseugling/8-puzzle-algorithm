"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const board_1 = require("./entities/board");
const closed_list_1 = require("./entities/closed-list");
const coordinate_1 = require("./entities/coordinate");
const open_list_1 = require("./entities/open-list");
function getProgramParams() {
    return {
        initialCoordinate: new coordinate_1.Coordinate(1, 2),
        targetCoordinate: new coordinate_1.Coordinate(4, 2),
        boardMatrix: { width: 5, heigh: 5 }
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
        let neighbors = current.getNeighbors();
        neighbors = neighbors.filter((item) => { return board.hasNodeByCoordinate(item.node.getCoordinate()); });
        for (let index = 0; index < neighbors.length; index++) {
            neighbors[index].node.setTarget(target.getCoordinate());
            openList.add(neighbors[index].node);
        }
        closedList.add(openList.exitFirst());
        openList.sort();
    } while (!(current.getCoordinate().getXAxis() === target.getCoordinate().getXAxis()
        && current.getCoordinate().getYAxis() === target.getCoordinate().getYAxis()));
    console.log;
    console.log('Atingimos o objetivo');
    console.log('Quantidade de iterações: ', closedList.getNodes().length - 1);
}
main();
//# sourceMappingURL=index.js.map
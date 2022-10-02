"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const board_1 = require("./entities/board");
const node_1 = require("./entities/node");
function main() {
    const rootBoard = new board_1.Board();
    rootBoard.set(10);
    const target = new board_1.Board(78);
    const root = new node_1.Node(undefined, rootBoard, target, 0);
    const openList = [root];
    const closedList = [];
    let current;
    while (openList.length) {
        current = openList && openList.length ? openList.shift() : new node_1.Node();
        if (current && current.getCost()) {
            const child = current.getChild();
            closedList.push(current);
            openList.push(child);
        }
    }
    if (!current) {
        console.log('Error CURRENT undefined');
        return;
    }
    console.log('Atingimos o objetivo');
    console.log('Target: ', target.get());
    console.log('Nodo final: ', current.getBoard().get());
    console.log('Nível do nodo final: ', current.getLevel());
}
main();
//# sourceMappingURL=index.js.map
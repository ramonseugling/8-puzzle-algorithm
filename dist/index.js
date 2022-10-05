"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inicial_1 = require("./constants/inicial");
const open_list_1 = require("./entities/open-list");
const board_1 = require("./entities/board");
const node_1 = require("./entities/node");
const closed_list_1 = require("./entities/closed-list");
function show(current) {
    console.log('============= ', current.getLevel(), ' =============');
    for (let index = 0; index < current.getBoard().get().length; index++) {
        let line = '';
        for (let indox = 0; indox < current.getBoard().get()[index].length; indox++) {
            line += current.getBoard().get()[index][indox];
        }
        console.log(line);
    }
}
function removeDuplicatedChild(children, openList, closedList) {
    for (let childIndex = 0; childIndex < children.length; childIndex++) {
        if (openList.exists(children[childIndex]) || closedList.exists(children[childIndex])) {
            children.splice(childIndex, 1);
        }
    }
    return children;
}
function play(root) {
    const openList = new open_list_1.OpenList(root);
    const closedList = new closed_list_1.ClosedList();
    let current = new node_1.Node();
    while (openList.getNodes().length) {
        current = openList.exitFirst();
        show(current);
        if (current && !current.getCost()) {
            return [current, openList, closedList];
        }
        const children = current.getChildren();
        const validChildren = removeDuplicatedChild(children, openList, closedList);
        closedList.add(current);
        openList.addBatch(validChildren);
        openList.sort();
    }
    return [current, openList, closedList];
}
function main() {
    const root = new node_1.Node(undefined, new board_1.Board(inicial_1.INICIAL), 0);
    const gameResult = play(root);
    const lastNode = gameResult[0];
    const openList = gameResult[1];
    const closedList = gameResult[2];
    console.log('Atingimos o objetivo!');
    console.log('Nível de profundidade do nodo final: ', lastNode.getLevel());
    console.log('Quantidade de nodos visitados: ', closedList.getNodes().length);
    console.log('Quantidade de nodos expandidos/criados: ', closedList.getNodes().length + openList.getNodes().length);
    console.log('Step: ', lastNode.step);
}
main();
//# sourceMappingURL=index.js.map
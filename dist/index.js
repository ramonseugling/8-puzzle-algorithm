"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inicial_1 = require("./constants/inicial");
const target_1 = require("./constants/target");
const board_1 = require("./entities/board");
const node_1 = require("./entities/node");
function play(root) {
    const openList = [root];
    const closedList = [];
    let current = new node_1.Node();
    while (openList.length) {
        current = openList.shift();
        closedList.push(current);
        for (let index = 0; index < current.getBoard().get().length; index++) {
            let line = '';
            for (let indox = 0; indox < current.getBoard().get()[index].length; indox++) {
                line += current.getBoard().get()[index][indox];
            }
            console.log(line);
        }
        if (current && !current.getCost()) {
            return current;
        }
        const children = current.getChildren();
        console.log('Novos filhos: ', children);
        for (let index = 0; index < openList.length; index++) {
            const temp = openList[index];
            for (let childIndex = 0; childIndex < children.length; childIndex++) {
                if (children[childIndex].equal(temp)) {
                    children.splice(childIndex, 1);
                }
            }
        }
        for (let index = 0; index < closedList.length; index++) {
            const temp = closedList[index];
            for (let childIndex = 0; childIndex < children.length; childIndex++) {
                if (children[childIndex].equal(temp)) {
                    children.splice(childIndex, 1);
                }
            }
        }
        for (let index = 0; index < children.length; index++) {
            openList.push(children[index]);
        }
        openList.sort((item1, item2) => {
            if (item1.getCost() > item2.getCost()) {
                return 1;
            }
            if (item1.getCost() < item2.getCost()) {
                return -1;
            }
            return 0;
        });
    }
    return current;
}
function main() {
    const root = new node_1.Node(undefined, new board_1.Board(inicial_1.INICIAL), 0);
    const lastNode = play(root);
    console.log('Atingimos o objetivo');
    console.log('Target: ', target_1.TARGET);
    console.log('Nodo final: ', lastNode.getBoard().get());
    console.log('Nível do nodo final: ', lastNode.getLevel());
}
main();
//# sourceMappingURL=index.js.map
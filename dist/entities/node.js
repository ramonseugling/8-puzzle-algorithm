"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Node = void 0;
const board_1 = require("./board");
class Node {
    constructor(father, board, target, level) {
        if (father) {
            this.father = father;
            this.board = new board_1.Board(this.father.getBoard().get() + 1);
        }
        if (target) {
            this.target = target;
        }
        if (board) {
            this.board = board;
            const cost = this.calculateCost();
            this.setCost(cost);
        }
        if (!level) {
            this.level = 0;
        }
        else {
            this.level = level;
        }
    }
    calculateCost() {
        const cost = Math.abs(this.board.get() - this.target.get());
        return cost;
    }
    getBoard() {
        return this.board;
    }
    getTarget() {
        return this.target;
    }
    getLevel() {
        return this.level;
    }
    getChild() {
        const childBoard = new board_1.Board(this.getBoard().get() + 1);
        const childLevel = this.getLevel() + 1;
        return new Node(this, childBoard, this.getTarget(), childLevel);
    }
    getCost() {
        return this.cost;
    }
    setCost(cost) {
        this.cost = cost;
    }
    setBoard(board) {
        this.board = board;
    }
}
exports.Node = Node;
//# sourceMappingURL=node.js.map
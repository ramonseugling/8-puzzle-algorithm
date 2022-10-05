"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Node = void 0;
const target_1 = require("../constants/target");
const variation_1 = require("../constants/variation");
const board_1 = require("./board");
class Node {
    constructor(father, board, level, step) {
        if (father) {
            this.father = father;
        }
        if (!level) {
            this.level = 0;
        }
        else {
            this.level = level;
        }
        if (board) {
            this.board = board;
            const cost = this.calculateCost();
            this.setCost(cost);
        }
        if (step) {
            this.step = step;
        }
    }
    uniformCost() {
        if (!this.level) {
            return 1;
        }
        if (this.equal(new Node(this, new board_1.Board(target_1.TARGET)))) {
            return 0;
        }
        return this.level;
    }
    veryComplexHeuristic() {
        let diference = 0;
        for (let xAxis = 0; xAxis < target_1.TARGET.length; xAxis++) {
            for (let yAxis = 0; yAxis < target_1.TARGET[xAxis].length; yAxis++) {
                if (this.board.get()[xAxis][yAxis] !== target_1.TARGET[xAxis][yAxis]) {
                    diference++;
                }
            }
        }
        if (diference > 0) {
            diference += this.level;
        }
        return diference;
    }
    simpleHeuristic() {
        let diference = 0;
        for (let xAxis = 0; xAxis < target_1.TARGET.length; xAxis++) {
            for (let yAxis = 0; yAxis < target_1.TARGET[xAxis].length; yAxis++) {
                if (this.board.get()[xAxis][yAxis] !== target_1.TARGET[xAxis][yAxis]) {
                    diference++;
                }
            }
        }
        if (diference > 0) {
            diference += this.level;
        }
        return diference;
    }
    calculateCost() {
        if (variation_1.variation === 'uniformCost') {
            this.cost = this.uniformCost();
        }
        else if (variation_1.variation === 'simpleHeuristic') {
            this.cost = this.simpleHeuristic();
        }
        else {
            this.cost = this.veryComplexHeuristic();
        }
        return this.cost;
    }
    getBoard() {
        return this.board;
    }
    getLevel() {
        return this.level;
    }
    getChild() {
        const childBoard = new board_1.Board();
        const childLevel = this.getLevel() + 1;
        return new Node(this, childBoard, childLevel);
    }
    getChildren() {
        const children = [];
        const moviments = [this.moveUp(), this.moveRight(), this.moveDown(), this.moveLeft()];
        const validMoviments = moviments.filter((board) => {
            return board[0].get().length > 0;
        });
        validMoviments.map((moviment) => {
            children.push(new Node(this, moviment[0], this.level + 1, this.step + ' ' + moviment[1]));
        });
        return children;
    }
    moveUp() {
        const board = new board_1.Board(this.board.get());
        const blank = board.getBlank();
        for (let xAxis = 0; xAxis < target_1.TARGET.length; xAxis++) {
            for (let yAxis = 0; yAxis < target_1.TARGET[xAxis].length; yAxis++) {
                if (xAxis === blank[0] && yAxis === blank[1]) {
                    if (xAxis - 1 < 0) {
                        return [new board_1.Board()];
                    }
                    board.set([xAxis, yAxis], this.board.get()[xAxis - 1][yAxis]);
                    board.set([xAxis - 1, yAxis], 0);
                }
            }
        }
        return [board, 'UP'];
    }
    moveRight() {
        const board = new board_1.Board(this.board.get());
        const blank = board.getBlank();
        for (let xAxis = 0; xAxis < target_1.TARGET.length; xAxis++) {
            for (let yAxis = 0; yAxis < target_1.TARGET[xAxis].length; yAxis++) {
                if (xAxis === blank[0] && yAxis === blank[1]) {
                    if (yAxis + 1 > 2) {
                        return [new board_1.Board()];
                    }
                    board.set([xAxis, yAxis], this.board.get()[xAxis][yAxis + 1]);
                    board.set([xAxis, yAxis + 1], 0);
                }
            }
        }
        return [board, 'RIGHT'];
    }
    moveDown() {
        const board = new board_1.Board(this.board.get());
        const blank = board.getBlank();
        for (let xAxis = 0; xAxis < target_1.TARGET.length; xAxis++) {
            for (let yAxis = 0; yAxis < target_1.TARGET[xAxis].length; yAxis++) {
                if (xAxis === blank[0] && yAxis === blank[1]) {
                    if (xAxis + 1 > 2) {
                        return [new board_1.Board()];
                    }
                    board.set([xAxis, yAxis], this.board.get()[xAxis + 1][yAxis]);
                    board.set([xAxis + 1, yAxis], 0);
                }
            }
        }
        return [board, 'DOWN'];
    }
    moveLeft() {
        const board = new board_1.Board(this.board.get());
        const blank = board.getBlank();
        for (let xAxis = 0; xAxis < target_1.TARGET.length; xAxis++) {
            for (let yAxis = 0; yAxis < target_1.TARGET[xAxis].length; yAxis++) {
                if (xAxis === blank[0] && yAxis === blank[1]) {
                    if (yAxis - 1 < 0) {
                        return [new board_1.Board()];
                    }
                    board.set([xAxis, yAxis], this.board.get()[xAxis][yAxis - 1]);
                    board.set([xAxis, yAxis - 1], 0);
                }
            }
        }
        return [board, 'LEFT'];
    }
    equal(param) {
        const paramBoard = param.getBoard().get();
        let diference = 0;
        for (let xAxis = 0; xAxis < paramBoard.length; xAxis++) {
            for (let yAxis = 0; yAxis < paramBoard[xAxis].length; yAxis++) {
                if (this.board.get()[xAxis][yAxis] !== paramBoard[xAxis][yAxis]) {
                    diference++;
                }
            }
        }
        return diference === 0;
    }
    getCost() {
        return this.cost;
    }
    getFather() {
        return this.father;
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
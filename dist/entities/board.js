"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Board = void 0;
const coordinate_1 = require("./coordinate");
const node_1 = require("./node");
class Board {
    constructor({ width, heigh }) {
        this.initialize(width, heigh);
    }
    initialize(width, heigh) {
        this.node = [];
        for (let xAxis = 0; xAxis < width; xAxis++) {
            this.node[xAxis] = [];
            for (let yAxis = 0; yAxis < heigh; yAxis++) {
                let node = new node_1.Node(new coordinate_1.Coordinate(xAxis, yAxis));
                this.node[xAxis][yAxis] = node;
            }
        }
    }
    getNodeByCoordinate(param) {
        let foundNode = new node_1.Node();
        this.node.forEach((column) => {
            column.forEach((item) => {
                if (item.getCoordinate().getXAxis() === param.getXAxis() && item.getCoordinate().getYAxis() === param.getYAxis()) {
                    foundNode = item;
                }
            });
        });
        return foundNode;
    }
    hasNodeByCoordinate(param) {
        if (!param) {
            return false;
        }
        const result = this.getNodeByCoordinate(param).getCoordinate();
        return result ? true : false;
    }
}
exports.Board = Board;
//# sourceMappingURL=board.js.map
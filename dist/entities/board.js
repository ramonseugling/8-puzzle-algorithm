"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Board = void 0;
const coordinate_1 = require("./coordinate");
const nodex_1 = require("./nodex");
class Board {
    constructor(width, heigh, initial, target) {
        this.nodexs = [];
        for (let xAxis = 0; xAxis < width; xAxis++) {
            this.nodexs[xAxis] = [];
            for (let yAxis = 0; yAxis < heigh; yAxis++) {
                let nodex = new nodex_1.Nodex(new coordinate_1.Coordinate(xAxis, yAxis));
                this.nodexs[xAxis][yAxis] = nodex;
            }
        }
        this.setInitial(initial);
        this.setTarget(target);
    }
    getInitial() { return this.initial; }
    getTarget() { return this.target; }
    setInitial(coordinate) {
        this.initial = coordinate;
    }
    setTarget(coordinate) {
        this.target = coordinate;
    }
    getNodexByCoordinate(coordinate) {
        let foundNodex = new nodex_1.Nodex();
        this.nodexs.forEach((column) => {
            column.forEach((item) => {
                if (item.getCoordinate().x === coordinate.x && item.getCoordinate().y === coordinate.y) {
                    foundNodex = item;
                }
            });
        });
        return foundNodex;
    }
    exists(coordinate) {
        if (!coordinate) {
            return false;
        }
        const result = this.getNodexByCoordinate(coordinate).getCoordinate();
        return result ? true : false;
    }
}
exports.Board = Board;
//# sourceMappingURL=board.js.map
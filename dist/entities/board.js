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
    show() {
        let line = '';
        let custom = '';
        for (let yAxis = this.nodexs[0].length - 1; yAxis > -1; yAxis--) {
            for (let xAxis = 0; xAxis < this.nodexs.length; xAxis++) {
                if (this.nodexs[xAxis][yAxis].getCoordinate().x === this.initial.x &&
                    this.nodexs[xAxis][yAxis].getCoordinate().y === this.initial.y) {
                    custom = `[XXXX] | `;
                }
                else if (this.nodexs[xAxis][yAxis].getCoordinate().x === this.target.x &&
                    this.nodexs[xAxis][yAxis].getCoordinate().y === this.target.y) {
                    custom = `[WWWW] | `;
                }
                else {
                    custom = `[${this.nodexs[xAxis][yAxis].getCoordinate().x}, ${this.nodexs[xAxis][yAxis].getCoordinate().y}] | `;
                }
                line += custom;
                if (xAxis === this.nodexs[0].length - 1) {
                    line += '\n';
                }
            }
        }
        console.log(line);
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
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Board = void 0;
class Board {
    constructor(param) {
        if (param) {
            this.value = [];
            for (let xAxis = 0; xAxis < param.length; xAxis++) {
                this.value[xAxis] = [];
                for (let yAxis = 0; yAxis < param[xAxis].length; yAxis++) {
                    this.value[xAxis][yAxis] = param[xAxis][yAxis];
                }
            }
        }
        else {
            this.value = undefined;
        }
    }
    getBlank() {
        if (!this.value) {
            return [0];
        }
        let blankCoordinate = [-1, -1];
        for (let xAxis = 0; xAxis < this.value.length; xAxis++) {
            for (let yAxis = 0; yAxis < this.value[xAxis].length; yAxis++) {
                if (this.value[xAxis][yAxis] === 0) {
                    blankCoordinate = [xAxis, yAxis];
                }
            }
        }
        return blankCoordinate;
    }
    set(coordinate, value) {
        if (this.value) {
            this.value[coordinate[0]][coordinate[1]] = value;
        }
    }
    get() {
        return this.value || [];
    }
}
exports.Board = Board;
//# sourceMappingURL=board.js.map
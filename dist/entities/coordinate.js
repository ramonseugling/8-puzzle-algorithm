"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Coordinate = void 0;
class Coordinate {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    getXAxis() {
        return this.x;
    }
    getYAxis() {
        return this.y;
    }
    setXAxis(xAxis) {
        this.x = xAxis;
    }
    setYAxis(yAxis) {
        this.y = yAxis;
    }
}
exports.Coordinate = Coordinate;
//# sourceMappingURL=coordinate.js.map
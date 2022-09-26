"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Nodex = void 0;
const position_1 = require("../enum/position");
const coordinate_1 = require("./coordinate");
const neighbor_1 = require("./neighbor");
class Nodex {
    constructor(coordinate, target) {
        if (coordinate)
            this.coordinate = coordinate;
        if (target) {
            this.target = target;
            this.calculateTargetDistance();
        }
    }
    getNeighbors() {
        const upNeighbor = new neighbor_1.Neighbor(this.getUpNeighborCoordinate(), position_1.Position.UP);
        const rightNeighbor = new neighbor_1.Neighbor(this.getRightNeighborCoordinate(), position_1.Position.RIGHT);
        const bottomNeighbor = new neighbor_1.Neighbor(this.getBottomNeighborCoordinate(), position_1.Position.BOTTOM);
        const leftNeighbor = new neighbor_1.Neighbor(this.getLeftNeighborCoordinate(), position_1.Position.LEFT);
        return [upNeighbor, rightNeighbor, bottomNeighbor, leftNeighbor];
    }
    getUpNeighborCoordinate() {
        return new Nodex(new coordinate_1.Coordinate(this.coordinate.x, this.coordinate.y + 1));
    }
    getRightNeighborCoordinate() {
        return new Nodex(new coordinate_1.Coordinate(this.coordinate.x + 1, this.coordinate.y));
    }
    getBottomNeighborCoordinate() {
        return new Nodex(new coordinate_1.Coordinate(this.coordinate.x, this.coordinate.y - 1));
    }
    getLeftNeighborCoordinate() {
        return new Nodex(new coordinate_1.Coordinate(this.coordinate.x - 1, this.coordinate.y));
    }
    calculateTargetDistance() {
        let xDifference = Math.abs(this.target.x - this.coordinate.x);
        let yDifference = Math.abs(this.target.y - this.coordinate.y);
        this.targetDistance = xDifference + yDifference;
    }
    getTargetDistance() { return this.targetDistance; }
    getCoordinate() { return this.coordinate; }
    setTarget(coordinate) {
        this.target = coordinate;
        this.calculateTargetDistance();
    }
}
exports.Nodex = Nodex;
//# sourceMappingURL=nodex.js.map
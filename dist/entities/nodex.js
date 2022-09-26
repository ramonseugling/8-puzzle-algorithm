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
    calculateNeigbors() {
        const upNeighbor = new neighbor_1.Neighbor(this.getUpNeighborCoordinate(), position_1.Position.UP);
        const rightNeighbor = new neighbor_1.Neighbor(this.getRightNeighborCoordinate(), position_1.Position.RIGHT);
        const bottomNeighbor = new neighbor_1.Neighbor(this.getBottomNeighborCoordinate(), position_1.Position.BOTTOM);
        const leftNeighbor = new neighbor_1.Neighbor(this.getLeftNeighborCoordinate(), position_1.Position.LEFT);
        return [upNeighbor, rightNeighbor, bottomNeighbor, leftNeighbor];
    }
    getNeighbors() {
        const upNeighbor = new neighbor_1.Neighbor(this.getUpNeighborCoordinate(), position_1.Position.UP);
        const rightNeighbor = new neighbor_1.Neighbor(this.getRightNeighborCoordinate(), position_1.Position.RIGHT);
        const bottomNeighbor = new neighbor_1.Neighbor(this.getBottomNeighborCoordinate(), position_1.Position.BOTTOM);
        const leftNeighbor = new neighbor_1.Neighbor(this.getLeftNeighborCoordinate(), position_1.Position.LEFT);
        return [upNeighbor, rightNeighbor, bottomNeighbor, leftNeighbor];
    }
    getUpNeighborCoordinate() {
        return new Nodex(new coordinate_1.Coordinate(this.coordinate.getXAxis(), this.coordinate.getYAxis() + 1));
    }
    getRightNeighborCoordinate() {
        return new Nodex(new coordinate_1.Coordinate(this.coordinate.getXAxis() + 1, this.coordinate.getYAxis()));
    }
    getBottomNeighborCoordinate() {
        return new Nodex(new coordinate_1.Coordinate(this.coordinate.getXAxis(), this.coordinate.getYAxis() - 1));
    }
    getLeftNeighborCoordinate() {
        return new Nodex(new coordinate_1.Coordinate(this.coordinate.getXAxis() - 1, this.coordinate.getYAxis()));
    }
    calculateTargetDistance() {
        let xDifference = Math.abs(this.target.getXAxis() - this.coordinate.getXAxis());
        let yDifference = Math.abs(this.target.getYAxis() - this.coordinate.getYAxis());
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
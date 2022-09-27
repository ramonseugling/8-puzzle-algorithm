"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Node = void 0;
const position_1 = require("../enum/position");
const coordinate_1 = require("./coordinate");
const neighbor_1 = require("./neighbor");
class Node {
    constructor(coordinate, target) {
        if (coordinate) {
            this.coordinate = coordinate;
        }
        if (target) {
            this.target = target;
            this.calculateTargetDistance();
        }
    }
    getValue() {
        return this.value;
    }
    setValue(param) {
        this.value = param;
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
        return new Node(new coordinate_1.Coordinate(this.coordinate.getXAxis(), this.coordinate.getYAxis() + 1));
    }
    getRightNeighborCoordinate() {
        return new Node(new coordinate_1.Coordinate(this.coordinate.getXAxis() + 1, this.coordinate.getYAxis()));
    }
    getBottomNeighborCoordinate() {
        return new Node(new coordinate_1.Coordinate(this.coordinate.getXAxis(), this.coordinate.getYAxis() - 1));
    }
    getLeftNeighborCoordinate() {
        return new Node(new coordinate_1.Coordinate(this.coordinate.getXAxis() - 1, this.coordinate.getYAxis()));
    }
    calculateTargetDistance() {
        const xDifference = Math.abs(this.target.getXAxis() - this.coordinate.getXAxis());
        const yDifference = Math.abs(this.target.getYAxis() - this.coordinate.getYAxis());
        this.targetDistance = xDifference + yDifference;
    }
    getTargetDistance() {
        return this.targetDistance;
    }
    getCoordinate() {
        return this.coordinate;
    }
    setTarget(coordinate) {
        this.target = coordinate;
        this.calculateTargetDistance();
    }
}
exports.Node = Node;
//# sourceMappingURL=node.js.map
import { Position } from '../enum/position'
import { Coordinate } from './coordinate'
import { Neighbor } from './neighbor'

export class Node {
    private coordinate!: Coordinate
    private target!: Coordinate
    private targetDistance!: number
    private value!: number

    constructor(coordinate?: Coordinate, target? : Coordinate) {
        if (coordinate) {
            this.coordinate = coordinate
        }
        if (target) {
            this.target = target
            this.calculateTargetDistance()
        }
    }

    getValue(): number {
        return this.value
    }

    setValue(param: number) {
        this.value = param
    }

    calculateNeigbors(): Neighbor[] {
        const upNeighbor = new Neighbor(this.getUpNeighborCoordinate(), Position.UP)
        const rightNeighbor = new Neighbor(this.getRightNeighborCoordinate(), Position.RIGHT)
        const bottomNeighbor = new Neighbor(this.getBottomNeighborCoordinate(), Position.BOTTOM)
        const leftNeighbor = new Neighbor(this.getLeftNeighborCoordinate(), Position.LEFT)

        return [upNeighbor, rightNeighbor, bottomNeighbor, leftNeighbor]
    }

    getNeighbors(): Neighbor[] {
        const upNeighbor = new Neighbor(this.getUpNeighborCoordinate(), Position.UP)
        const rightNeighbor = new Neighbor(this.getRightNeighborCoordinate(), Position.RIGHT)
        const bottomNeighbor = new Neighbor(this.getBottomNeighborCoordinate(), Position.BOTTOM)
        const leftNeighbor = new Neighbor(this.getLeftNeighborCoordinate(), Position.LEFT)

        return [upNeighbor, rightNeighbor, bottomNeighbor, leftNeighbor]
    }

    getUpNeighborCoordinate(): Node {
        return new Node(new Coordinate(this.coordinate.getXAxis(), this.coordinate.getYAxis() + 1))
    }

    getRightNeighborCoordinate(): Node {
        return new Node(new Coordinate(this.coordinate.getXAxis() + 1, this.coordinate.getYAxis()))
    }

    getBottomNeighborCoordinate(): Node {
        return new Node(new Coordinate(this.coordinate.getXAxis(), this.coordinate.getYAxis() - 1))
    }

    getLeftNeighborCoordinate(): Node {
        return new Node(new Coordinate(this.coordinate.getXAxis() - 1, this.coordinate.getYAxis()))
    }

    calculateTargetDistance() {
        const xDifference = Math.abs(this.target.getXAxis() - this.coordinate.getXAxis())
        const yDifference = Math.abs(this.target.getYAxis() - this.coordinate.getYAxis())
        this.targetDistance = xDifference + yDifference
    }

    getTargetDistance() : number {
        return this.targetDistance
    }

    getCoordinate() : Coordinate {
        return this.coordinate
    }

    setTarget(coordinate: Coordinate) : void {
        this.target = coordinate
        this.calculateTargetDistance()
    }
}

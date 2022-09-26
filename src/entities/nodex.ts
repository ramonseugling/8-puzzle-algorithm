import { Position } from "../enum/position";
import { Board } from "./board";
import { Coordinate } from "./coordinate";
import { Neighbor } from "./neighbor";

export class Nodex {
    private coordinate!: Coordinate
    private target!: Coordinate
    private targetDistance!: number


    constructor(coordinate?: Coordinate, target? : Coordinate){
        if(coordinate)
            this.coordinate = coordinate 
        if(target){
            this.target = target;
            this.calculateTargetDistance()
        }            
    }

    getNeighbors(): Neighbor[] {
        const upNeighbor = new Neighbor(this.getUpNeighborCoordinate(), Position.UP)
        const rightNeighbor = new Neighbor(this.getRightNeighborCoordinate(), Position.RIGHT)
        const bottomNeighbor = new Neighbor(this.getBottomNeighborCoordinate(), Position.BOTTOM)
        const leftNeighbor = new Neighbor(this.getLeftNeighborCoordinate(), Position.LEFT)
        
        return [upNeighbor, rightNeighbor, bottomNeighbor, leftNeighbor]
    }

    getUpNeighborCoordinate(): Nodex {
        return new Nodex(new Coordinate(this.coordinate.x, this.coordinate.y + 1))
    }

    getRightNeighborCoordinate(): Nodex {
        return new Nodex(new Coordinate(this.coordinate.x  + 1, this.coordinate.y))
    }

    getBottomNeighborCoordinate(): Nodex {
        return new Nodex(new Coordinate(this.coordinate.x, this.coordinate.y - 1))
    }

    getLeftNeighborCoordinate(): Nodex {
        return new Nodex(new Coordinate(this.coordinate.x - 1, this.coordinate.y))
    }

    calculateTargetDistance() {
        let xDifference = Math.abs(this.target.x - this.coordinate.x);
        let yDifference = Math.abs(this.target.y - this.coordinate.y);
        this.targetDistance = xDifference + yDifference
    }

    getTargetDistance() : number{ return this.targetDistance }
    getCoordinate() : Coordinate{ return this.coordinate }

    setTarget(coordinate: Coordinate) : void{
        this.target = coordinate
        this.calculateTargetDistance()
    }
}

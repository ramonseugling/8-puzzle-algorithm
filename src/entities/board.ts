import { Coordinate } from "./coordinate"
import { Matrix } from "./matrix"
import { Nodex } from "./nodex"

export class Board{
    nodexs!: Nodex[][]
    initial!: Coordinate
    target!: Coordinate
 
    constructor(width: number, heigh: number, initial: Coordinate, target: Coordinate) {
        this.nodexs = []
        for (let xAxis = 0; xAxis < width; xAxis++) { 
            this.nodexs[xAxis] = []
            for (let yAxis = 0; yAxis < heigh; yAxis++) {
                let nodex = new Nodex(new Coordinate(xAxis,yAxis))
                this.nodexs[xAxis][yAxis] = nodex
            }          
        }

        this.setInitial(initial)
        this.setTarget(target)
    }
    
    getInitial(): Coordinate{ return this.initial }
    getTarget(): Coordinate{ return this.target }

    setInitial(coordinate: Coordinate){
        this.initial = coordinate
    }

    setTarget(coordinate: Coordinate){
        this.target = coordinate
    }

    getNodexByCoordinate(coordinate: Coordinate): Nodex {
        let foundNodex = new Nodex()    

        this.nodexs.forEach((column) => {
            column.forEach((item) => {
                if (item.getCoordinate().x === coordinate.x && item.getCoordinate().y === coordinate.y){
                    foundNodex = item
                }
            })
        })
        return foundNodex
    }

    exists(coordinate : Coordinate) : boolean{
        if(!coordinate) { return false }
        const result = this.getNodexByCoordinate(coordinate).getCoordinate();
        return result ? true : false
    }
}

import { Coordinate } from "./coordinate"
import { Matrix } from "./matrix"
import { Nodex } from "./nodex"

export class Board{
    nodexs!: Nodex[][]
    initial!: Coordinate
    target!: Coordinate
 
    constructor(matrix: Matrix) {
        this.nodexs = []
        for (let xAxis = 0; xAxis < matrix.width; xAxis++) { 
            this.nodexs[xAxis] = []
            for (let yAxis = 0; yAxis < matrix.heigh; yAxis++) {
                let nodex = new Nodex(new Coordinate(xAxis,yAxis))
                this.nodexs[xAxis][yAxis] = nodex
            }          
        }
    }

    setInitial(coordinate: Coordinate){
        this.initial = coordinate
    }

    setTarget(coordinate: Coordinate){
        this.target = coordinate
    }

    // getTarget(): Nodex {
    //     for (let xAxis = 1; xAxis <= this.nodexs; xAxis++) { 
    //         for (let yAxis = 1; yAxis <= matrix.heigh; yAxis++) {
    //             if (this.nodexs[index].getCoordinate().x === this.target.x && this.nodexs[index].getCoordinate().y === this.target.y){
    //                 return this.nodexs[][index]
    //             }
    //         }
    //     }
    //     return new Nodex(new Coordinate(0,0))
    // }

    // getInitial(): Nodex {
    //     for (let index = 0; index < this.nodexs.length; index++) {
    //         if (this.nodexs[index].getCoordinate().x === this.initial.x && this.nodexs[index].getCoordinate().y === this.initial.y){
    //             return this.nodexs[index]
    //         }
    //     }
    //     return new Nodex(new Coordinate(0,0))
    // }

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

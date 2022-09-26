import { Coordinate } from "./coordinate"
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

    show(): void {
        let line = ''
        let custom = ''
        //line =  '['+ this.nodexs[0][0].getCoordinate().x + ', ' + this.nodexs[0][0].getCoordinate().y + ']' + ' | ' + '[' + this.nodexs[0][1].getCoordinate().x + ', ' + this.nodexs[0][1].getCoordinate().y +']'
        for (let yAxis = this.nodexs[0].length - 1; yAxis > -1; yAxis--) {
            for (let xAxis = 0; xAxis < this.nodexs.length; xAxis++) {
                if(this.nodexs[xAxis][yAxis].getCoordinate().x === this.initial.x && 
                    this.nodexs[xAxis][yAxis].getCoordinate().y === this.initial.y){
                    custom = `[XXXX] | `
                } else if(this.nodexs[xAxis][yAxis].getCoordinate().x === this.target.x && 
                this.nodexs[xAxis][yAxis].getCoordinate().y === this.target.y){
                    custom = `[WWWW] | `
                } else {
                    custom = `[${this.nodexs[xAxis][yAxis].getCoordinate().x}, ${this.nodexs[xAxis][yAxis].getCoordinate().y}] | `
                }
                
                line += custom
                if(xAxis === this.nodexs[0].length - 1) {
                    line += '\n'
                }
            }
        }
        // for (let xAxis = 0; xAxis < this.nodexs.length; xAxis++) {
        //     for (let yAxis = this.nodexs[0].length - 1; yAxis > 0; yAxis--) {
        //         line += `[${this.nodexs[xAxis][yAxis].getCoordinate().x}, ${this.nodexs[xAxis][yAxis].getCoordinate().y}] | `
        //         if(yAxis === 1) {
        //             line += '\n'
        //         }
        //     }
        // }
        console.log(line)
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

import { Coordinate } from "./coordinate"
import { Matrix } from "./matrix"
import { Node } from "./node"

export class Board{
    node!: Node[][]
 
    constructor({ width, heigh }: Matrix) {
        this.initialize(width, heigh)
    }

    private initialize(width: number, heigh: number): void {
        this.node = []
        for (let xAxis = 0; xAxis < width; xAxis++) { 
            this.node[xAxis] = []
            for (let yAxis = 0; yAxis < heigh; yAxis++) {
                const node = new Node(new Coordinate(xAxis,yAxis))
                this.node[xAxis][yAxis] = node
            }          
        }
    }

    getNodeByCoordinate(param: Coordinate): Node {
        let foundNode = new Node()    

        this.node.forEach((column) => {
            column.forEach((item) => {
                if (item.getCoordinate().getXAxis() === param.getXAxis() && item.getCoordinate().getYAxis() === param.getYAxis()){
                    foundNode = item
                }
            })
        })
        return foundNode
    }

    hasNodeByCoordinate(param: Coordinate) : boolean{
        if(!param) { return false }
        const result = this.getNodeByCoordinate(param).getCoordinate();
        return result ? true : false
    }


    // show(): void {
    //     let line = ''
    //     let custom = ''
    //     //line =  '['+ this.node[0][0].getCoordinate().x + ', ' + this.node[0][0].getCoordinate().y + ']' + ' | ' + '[' + this.node[0][1].getCoordinate().x + ', ' + this.node[0][1].getCoordinate().y +']'
    //     for (let yAxis = this.node[0].length - 1; yAxis > -1; yAxis--) {
    //         for (let xAxis = 0; xAxis < this.node.length; xAxis++) {
    //             if(this.node[xAxis][yAxis].getCoordinate().getXAxis() === this.initial.getXAxis() && 
    //                 this.node[xAxis][yAxis].getCoordinate().y === this.initial.getYxis()){
    //                 custom = `[XXXX] | `
    //             } else if(this.node[xAxis][yAxis].getCoordinate().x === this.target.x && 
    //             this.node[xAxis][yAxis].getCoordinate().y === this.target.y){
    //                 custom = `[WWWW] | `
    //             } else {
    //                 custom = `[${this.node[xAxis][yAxis].getCoordinate().x}, ${this.node[xAxis][yAxis].getCoordinate().y}] | `
    //             }
                
    //             line += custom
    //             if(xAxis === this.node[0].length - 1) {
    //                 line += '\n'
    //             }
    //         }
    //     }
    // }
    
    // getCurrent(): Coordinate{ return this.current }
    // getTarget(): Coordinate{ return this.target }

    // setCurrent(coordinate: Coordinate){
    //     this.current = coordinate
    // }

    // setTarget(coordinate: Coordinate){
    //     this.target = coordinate
    // }
}

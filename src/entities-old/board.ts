import { Coordinate } from './coordinate'
import { Matrix } from './matrix'
import { Node } from './node'

export class Board {
    nodes!: Node[][]

    constructor({ width, heigh }: Matrix) {
        this.initialize(width, heigh)
    }

    private initialize(width: number, heigh: number): void {
        this.nodes = []
        let value = 1
        for (let xAxis = 0; xAxis < width; xAxis++) {
            this.nodes[xAxis] = [new Node(), new Node(), new Node()]
            for (let yAxis = 0; yAxis < heigh; yAxis++) {
                const node = new Node(new Coordinate(xAxis, yAxis))
                node.setValue(value)
                value ++
                this.nodes[xAxis][yAxis] = node
            }
        }
    }

    show(initial: Coordinate, target: Coordinate): void {
        let line = ''
        let custom = ''
        for ( let yAxis = this.nodes[0].length - 1; yAxis > -1; yAxis--) {
            for (let xAxis = 0; xAxis < this.nodes.length; xAxis++) {
                if (this.nodes[xAxis][yAxis].getCoordinate().getXAxis() === initial.getXAxis() &&
                    this.nodes[xAxis][yAxis].getCoordinate().getYAxis() === initial.getYAxis()) {
                    custom = `[X] | `
                } else if (this.nodes[xAxis][yAxis].getCoordinate().getXAxis() === target.getXAxis() &&
                this.nodes[xAxis][yAxis].getCoordinate().getYAxis() === target.getYAxis()) {
                    custom = `[W] | `
                } else {
                    // custom = `[${this.nodes[xAxis][yAxis].getCoordinate().getXAxis()}, ${this.nodes[xAxis][yAxis].getCoordinate().getYAxis()}] | `
                    custom = `[${this.nodes[xAxis][yAxis].getValue()}] | `
                }

                line += custom
                if (xAxis === this.nodes[0].length - 1) {
                    line += '\n'
                }
            }
        }
        console.log(line)
    }

    getNodeByCoordinate(param: Coordinate): Node {
        let foundNode = new Node()

        this.nodes.forEach((column) => {
            column.forEach((item) => {
                if (item.getCoordinate().getXAxis() === param.getXAxis() && item.getCoordinate().getYAxis() === param.getYAxis()) {
                    foundNode = item
                }
            })
        })
        return foundNode
    }

    hasNodeByCoordinate(param: Coordinate) : boolean {
        if (!param) {
            return false
        }
        const result = this.getNodeByCoordinate(param).getCoordinate()
        return result ? true : false
    }
}

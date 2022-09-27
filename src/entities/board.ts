import { Coordinate } from './coordinate'
import { Matrix } from './matrix'
import { Node } from './node'

export class Board {
    node!: Node[][]

    constructor({ width, heigh }: Matrix) {
        this.initialize(width, heigh)
    }

    private initialize(width: number, heigh: number): void {
        this.node = []
        for (let xAxis = 0; xAxis < width; xAxis++) {
            this.node[xAxis] = []
            for (let yAxis = 0; yAxis < heigh; yAxis++) {
                const node = new Node(new Coordinate(xAxis, yAxis))
                this.node[xAxis][yAxis] = node
            }
        }
    }

    getNodeByCoordinate(param: Coordinate): Node {
        let foundNode = new Node()

        this.node.forEach((column) => {
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

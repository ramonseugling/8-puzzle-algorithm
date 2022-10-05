import { TARGET } from '../constants/target'
import { variation } from '../constants/variation'
import { Board } from './board'

export class Node {
    private board!: Board
    private father!: Node
    private cost!: number
    private level!: number
    public step!: String

    constructor(father?: Node, board?: Board, level?: number, step?: String) {
        if (father) {
            this.father = father
        }

        if (!level) {
            this.level = 0
        } else {
            this.level = level
        }

        if (board) {
            this.board = board
            const cost = this.calculateCost()
            this.setCost(cost)
        }

        if (step) {
            this.step = step
        }
    }

    private uniformCost(): number {
        if (!this.level) {
            return 1
        }
        if (this.equal(new Node(this, new Board(TARGET)))) {
            return 0
        }

        return this.level
    }

    private veryComplexHeuristic(): number {
        let diference = 0
        for (let xAxis = 0; xAxis < TARGET.length; xAxis++) {
            for (let yAxis = 0; yAxis < TARGET[xAxis].length; yAxis++) {
                if (this.board.get()[xAxis][yAxis] !== TARGET[xAxis][yAxis]) {
                    diference ++
                }
            }
        }
        if (diference > 0) {
            diference += this.level
        }
        return diference
    }

    public simpleHeuristic(): number {
        let diference = 0
        for (let xAxis = 0; xAxis < TARGET.length; xAxis++) {
            for (let yAxis = 0; yAxis < TARGET[xAxis].length; yAxis++) {
                if (this.board.get()[xAxis][yAxis] !== TARGET[xAxis][yAxis]) {
                    diference ++
                }
            }
        }
        if (diference > 0) {
            diference += this.level
        }
        return diference
    }

    public calculateCost(): number {
        if (variation === 'uniformCost') {
            this.cost = this.uniformCost()
        } else if (variation === 'simpleHeuristic') {
            this.cost = this.simpleHeuristic()
        } else {
            this.cost = this.veryComplexHeuristic()
        }
        return this.cost
    }

    public getBoard(): Board {
        return this.board
    }

    public getLevel(): number {
        return this.level
    }

    public getChild(): Node {
        const childBoard = new Board()
        const childLevel: number = this.getLevel() + 1
        return new Node(this, childBoard, childLevel)
    }

    public getChildren(): Node[] {
        const children: Node[] = []
        const moviments = [this.moveUp(), this.moveRight(), this.moveDown(), this.moveLeft()]
        const validMoviments = moviments.filter((board: any) => {
            return board[0].get().length > 0
        })
        validMoviments.map((moviment)=> {
            children.push(new Node(this, moviment[0], this.level+1, this.step+ ' ' + moviment[1]))
        })
        return children
    }

    public moveUp(): [Board, String?] {
        const board: Board = new Board(this.board.get())
        const blank = board.getBlank()

        for (let xAxis = 0; xAxis < TARGET.length; xAxis++) {
            for (let yAxis = 0; yAxis < TARGET[xAxis].length; yAxis++) {
                if (xAxis === blank[0] && yAxis === blank[1]) {
                    if (xAxis - 1 < 0) {
                        return [new Board()]
                    }
                    board.set([xAxis, yAxis], this.board.get()[xAxis -1][yAxis])
                    board.set([xAxis-1, yAxis], 0)
                }
            }
        }
        return [board, 'UP']
    }

    public moveRight(): [Board, String?] {
        const board: Board = new Board(this.board.get())
        const blank = board.getBlank()

        for (let xAxis = 0; xAxis < TARGET.length; xAxis++) {
            for (let yAxis = 0; yAxis < TARGET[xAxis].length; yAxis++) {
                if (xAxis === blank[0] && yAxis === blank[1]) {
                    if (yAxis + 1 > 2) {
                        return [new Board()]
                    }
                    board.set([xAxis, yAxis], this.board.get()[xAxis][yAxis+1])
                    board.set([xAxis, yAxis+1], 0)
                }
            }
        }
        return [board, 'RIGHT']
    }

    public moveDown(): [Board, String?] {
        const board: Board = new Board(this.board.get())
        const blank = board.getBlank()

        for (let xAxis = 0; xAxis < TARGET.length; xAxis++) {
            for (let yAxis = 0; yAxis < TARGET[xAxis].length; yAxis++) {
                if (xAxis === blank[0] && yAxis === blank[1]) {
                    if (xAxis+1 > 2) {
                        return [new Board()]
                    }
                    board.set([xAxis, yAxis], this.board.get()[xAxis+1][yAxis])
                    board.set([xAxis+1, yAxis], 0)
                }
            }
        }
        return [board, 'DOWN']
    }

    public moveLeft(): [Board, String?] {
        const board: Board = new Board(this.board.get())
        const blank = board.getBlank()

        for (let xAxis = 0; xAxis < TARGET.length; xAxis++) {
            for (let yAxis = 0; yAxis < TARGET[xAxis].length; yAxis++) {
                if (xAxis === blank[0] && yAxis === blank[1]) {
                    if (yAxis - 1 < 0) {
                        return [new Board()]
                    }
                    board.set([xAxis, yAxis], this.board.get()[xAxis][yAxis-1])
                    board.set([xAxis, yAxis-1], 0)
                }
            }
        }
        return [board, 'LEFT']
    }

    public equal(param: Node): boolean {
        const paramBoard = param.getBoard().get()
        let diference = 0
        for (let xAxis = 0; xAxis < paramBoard.length; xAxis++) {
            for (let yAxis = 0; yAxis < paramBoard[xAxis].length; yAxis++) {
                if (this.board.get()[xAxis][yAxis] !== paramBoard[xAxis][yAxis]) {
                    diference++
                }
            }
        }
        return diference === 0
    }

    public getCost(): number {
        return this.cost
    }

    public getFather(): Node {
        return this.father
    }

    public setCost(cost: number) {
        this.cost = cost
    }

    public setBoard(board: Board) {
        this.board = board
    }
}

import { TARGET } from '../constants/target'
import { Board } from './board'

export class Node {
    private board!: Board
    private father!: Node
    private cost!: number
    private level!: number

    constructor(father?: Node, board?: Board, level?: number) {
        if (father) {
            this.father = father
        }
        if (board) {
            this.board = board
            const cost = this.calculateCost()
            this.setCost(cost)
        }
        if (!level) {
            this.level = 0
        } else {
            this.level = level
        }
    }

    public calculateCost(): number {
        let diference = 0
        for (let xAxis = 0; xAxis < TARGET.length; xAxis++) {
            for (let yAxis = 0; yAxis < TARGET[xAxis].length; yAxis++) {
                if(this.board.get()[xAxis][yAxis] !== TARGET[xAxis][yAxis]) {
                     diference ++
                }
            }
        }
        this.cost = diference
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
        const validMoviments = moviments.filter((board: Board) => { return board.get().length > 0 })
        validMoviments.map((moviment)=> {
            children.push(new Node(this.father, moviment, this.level+1))
        })
        return children
    }

    public moveUp(): Board {
        const board: Board = new Board(this.board.get())
        const blank = board.getBlank()
        
        for (let xAxis = 0; xAxis < TARGET.length; xAxis++) {
            for (let yAxis = 0; yAxis < TARGET[xAxis].length; yAxis++) {
                if(xAxis === blank[0] && yAxis === blank[1]) {
                    if(xAxis - 1 < 0) {
                        return new Board()
                    }
                    board.set([xAxis, yAxis], this.board.get()[xAxis -1 ][yAxis])
                    board.set([xAxis-1, yAxis], 0)
                }
            }
        }
        return board
    }

    public moveRight(): Board {
        const board: Board = new Board(this.board.get())
        const blank = board.getBlank()
        
        for (let xAxis = 0; xAxis < TARGET.length; xAxis++) {
            for (let yAxis = 0; yAxis < TARGET[xAxis].length; yAxis++) {
                if(xAxis === blank[0] && yAxis === blank[1]) {
                    if(yAxis + 1 > 2) {
                        return new Board()
                    }
                    board.set([xAxis, yAxis], this.board.get()[xAxis][yAxis+1])
                    board.set([xAxis, yAxis+1], 0)
                }
            }
        }
        return board
    }

    public moveDown(): Board {
        const board: Board = new Board(this.board.get())
        const blank = board.getBlank()
        
        for (let xAxis = 0; xAxis < TARGET.length; xAxis++) {
            for (let yAxis = 0; yAxis < TARGET[xAxis].length; yAxis++) {
                if(xAxis === blank[0] && yAxis === blank[1]) {
                    if(xAxis+1 > 2) {
                        return new Board()
                    }
                    board.set([xAxis, yAxis], this.board.get()[xAxis+1][yAxis])
                    board.set([xAxis+1, yAxis], 0)
                }
            }
        }
        return board
    }

    public moveLeft(): Board{ 
        const board: Board = new Board(this.board.get())
        const blank = board.getBlank()
        
        for (let xAxis = 0; xAxis < TARGET.length; xAxis++) {
            for (let yAxis = 0; yAxis < TARGET[xAxis].length; yAxis++) {
                if(xAxis === blank[0] && yAxis === blank[1]) {
                    if(yAxis - 1 < 0) {
                        return new Board()
                    }
                    board.set([xAxis, yAxis], this.board.get()[xAxis][yAxis-1])
                    board.set([xAxis, yAxis-1], 0)
                }
            }
        }
        return board
    }

    public equal(param: Node): boolean {
        const paramBoard = param.getBoard().get()
        let diference = 0
        for (let xAxis = 0; xAxis < paramBoard.length; xAxis++) {
            for (let yAxis = 0; yAxis < paramBoard[xAxis].length; yAxis++) {
                if(this.board.get()[xAxis][yAxis] !== paramBoard[xAxis][yAxis]) {
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

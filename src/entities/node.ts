import { Board } from './board'

export class Node {
    private board!: Board
    private target!: Board
    private father!: Node
    private cost!: number
    private level!: number

    constructor(father?: Node, board?: Board, target?: Board, level?: number) {
        if (father) {
            this.father = father
            this.board = new Board(this.father.getBoard().get()+1)
        }
        if (target) {
            this.target = target
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
        const cost = Math.abs(this.board.get() - this.target.get())
        return cost
    }

    public getBoard(): Board {
        return this.board
    }

    public getTarget(): Board {
        return this.target
    }
    public getLevel(): number {
        return this.level
    }

    public getChild(): Node {
        const childBoard = new Board(this.getBoard().get() + 1)
        const childLevel: number = this.getLevel() + 1
        return new Node(this, childBoard, this.getTarget(), childLevel)
    }

    public getCost(): number {
        return this.cost
    }

    public setCost(cost: number) {
        this.cost = cost
    }

    public setBoard(board: Board) {
        this.board = board
    }
}

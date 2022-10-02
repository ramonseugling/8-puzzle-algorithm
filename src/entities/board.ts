// import { Piece } from './piece'

export class Board {
    // private pieces!: Piece[][]
    private value!: number

    constructor(value?: number) {
        this.value = value ? value : Math.floor(Math.random() * 100)
    }

    public set(value?: number): void {
        this.value = value ? value : Math.floor(Math.random() * 100)
    }
    public get(): number {
        return this.value
    }
    // public initialize(): void {
    //     this.pieces = []
    //     let value = 1
    //     for (let xAxis = 0; xAxis < 3; xAxis++) {
    //         this.pieces[xAxis] = [new Piece(value), new Piece(value), new Piece(value)]
    //         for (let yAxis = 0; yAxis < 3; yAxis++) {
    //             const piece = new Piece(value)
    //             value ++
    //             this.pieces[xAxis][yAxis] = piece
    //         }
    //     }
    // }
}

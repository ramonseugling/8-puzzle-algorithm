import { INICIAL } from "../constants/inicial"

export class Board {
    private value?: Array<Array<number>>

    constructor(param?: Array<Array<number>>) {
        if(param) {
            this.value = []
            for (let xAxis = 0; xAxis < param.length; xAxis++) {
                this.value[xAxis] = []
                for (let yAxis = 0; yAxis < param[xAxis].length; yAxis++) {
                    this.value[xAxis][yAxis]=param[xAxis][yAxis]
                }
            }
        } else {
            this.value = undefined
        }
    }

    public getBlank(): Array<number>{
        if(!this.value){
            return [0]
        }

        let blankCoordinate: number[] = [-1, -1]

        for (let xAxis = 0; xAxis < this.value.length; xAxis++) {
            for (let yAxis = 0; yAxis < this.value[xAxis].length; yAxis++) {
                if(this.value[xAxis][yAxis] === 0) {
                    blankCoordinate = [xAxis, yAxis]
                }
            }
        }
        return blankCoordinate
    }

    public set(coordinate: Array<number>, value: number): void {
        if(this.value){
            this.value[coordinate[0]][coordinate[1]] = value
        }
    }
    public get(): Array<Array<number>> {
        return this.value || []
    }
}

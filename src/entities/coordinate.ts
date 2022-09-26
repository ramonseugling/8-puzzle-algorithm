export class Coordinate {
    private x: number
    private y: number

    constructor(x: number, y: number){
        this.x = x;
        this.y = y;
    }

    getXAxis() : number {
        return this.x;
    }
    getYAxis() : number {
        return this.y;
    }

    setXAxis(xAxis: number): void {
        this.x = xAxis;
    }

    setYAxis(yAxis: number): void {
        this.y = yAxis;
    }
}
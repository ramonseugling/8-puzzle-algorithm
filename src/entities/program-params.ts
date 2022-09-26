import { Coordinate } from "./coordinate"
import { Matrix } from "./matrix"

export interface ProgramParams {
    initialCoordinate: Coordinate
    targetCoordinate: Coordinate
    boardMatrix: Matrix
}
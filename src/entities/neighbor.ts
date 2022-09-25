import { Position } from "../enum/position";
import { Nodex } from "./nodex";

export class Neighbor {
    nodex!: Nodex
    position!: Position

    constructor(nodex?: Nodex, position?: Position){
        if(nodex){
            this.nodex = nodex
        }
        if(position)
            this.position = position        
    }
}

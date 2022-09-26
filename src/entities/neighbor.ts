import { Position } from "../enum/position";
import { Node } from "./node";

export class Neighbor {
    node!: Node
    position!: Position

    constructor(node?: Node, position?: Position){
        if(node){
            this.node = node
        }
        if(position)
            this.position = position        
    }
}

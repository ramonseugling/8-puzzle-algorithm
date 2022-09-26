import { Node } from "./node";

export class OpenList {
    private nodes: Node[]
    constructor(initial: Node){
        this.nodes = []
        this.nodes.push(initial)
    }
    add (node: Node): void {
        this.nodes.push(node)
    }
    exitFirst(): Node | undefined{        
        return this.nodes.shift()
    }
    sort(): void {        
        this.nodes = this.nodes.sort((item1 : Node, item2 : Node) => {
            if(item1.getTargetDistance() > item2.getTargetDistance()){
                return 1
            }
            if(item1.getTargetDistance() < item2.getTargetDistance()){
                return -1
            }
            return 0
        })

    }

    getNodes(): Node[] { return this.nodes}
    getFirst(): Node { return this.nodes[0]}
}
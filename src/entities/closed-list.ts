import { Node } from './node'

export class ClosedList {
    private nodes!: Node[]
    constructor() {
        this.nodes = []
    }

    getNodes(): Node[] {
        return this.nodes
    }
    add (node: Node | undefined): void {
        if (node) {
            this.nodes.push(node)
        }
    }
}

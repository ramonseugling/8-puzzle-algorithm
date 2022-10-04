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

    find(node: Node): Node {
        for (let index = 0; index < this.nodes.length; index++) {
            const temp = this.nodes[index]
            if (node.equal(temp)) {
                return this.nodes[index]
            }
        }
        return new Node()
    }

    exists(node: Node): boolean {
        for (let index = 0; index < this.nodes.length; index++) {
            const temp = this.nodes[index]
            if (node.equal(temp)) {
                return true
            }
        }
        return false
    }
}

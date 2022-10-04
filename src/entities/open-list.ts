import { Node } from './node'

export class OpenList {
    private nodes: Node[]
    constructor(initial: Node) {
        this.nodes = []
        this.nodes.push(initial)
    }

    add (node: Node): void {
        this.nodes.push(node)
    }

    addBatch (nodes: Node[]): void {
        for (let index = 0; index < nodes.length; index++) {
            this.nodes.push(nodes[index])
        }
    }

    exitFirst(): Node | undefined {
        return this.nodes.shift()
    }

    sort(): void {
        this.nodes = this.nodes.sort((item1 : Node, item2 : Node) => {
            if (item1.getCost() > item2.getCost()) {
                return 1
            }
            if (item1.getCost() < item2.getCost()) {
                return -1
            }
            return 0
        })
    }

    getNodes(): Node[] {
        return this.nodes
    }

    find(node: Node): Node {
        for (let index = 0; index < this.nodes.length; index++) {
            const temp = this.nodes[index]
            if (node.equal(temp)) {
                console.log(this.nodes[index].getFather())
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

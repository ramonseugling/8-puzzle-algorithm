import { Board } from './entities/board'
import { Node } from './entities/node'

function main() {
    const rootBoard = new Board()
    rootBoard.set(10)

    const target = new Board(78)
    const root = new Node(undefined, rootBoard, target, 0)

    const openList: Node[] = [root]
    const closedList: Node[] = []

    let current
    while (openList.length) {
        current = openList && openList.length ? openList.shift() : new Node()
        if (current && current.getCost()) {
            const child = current.getChild()
            closedList.push(current)
            openList.push(child)
        }
    }

    if (!current) {
        console.log('Error CURRENT undefined')
        return
    }

    console.log('Atingimos o objetivo')
    console.log('Target: ', target.get())
    console.log('Nodo final: ', current.getBoard().get())
    console.log('Nível do nodo final: ', current.getLevel())
}

main()

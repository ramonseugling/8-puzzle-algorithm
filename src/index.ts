import { INICIAL } from './constants/inicial'
import { TARGET } from './constants/target'
import { OpenList } from './entities/open-list'
import { Board } from './entities/board'
import { Node } from './entities/node'
import { ClosedList } from './entities/closed-list'

function show(current: Node): void {
    console.log('============= ', current.getLevel(), ' =============')
    for (let index = 0; index < current.getBoard().get().length; index++) {
        let line = ''
        for (let indox = 0; indox < current.getBoard().get()[index].length; indox++) {
            line += current.getBoard().get()[index][indox]
        }
        console.log(line)
    }
}

function removeDuplicatedChild(children: Node[], openList: OpenList, closedList: ClosedList): Node[] {
    for (let childIndex = 0; childIndex < children.length; childIndex++) {
        if (openList.exists(children[childIndex]) || closedList.exists(children[childIndex])) {
            children.splice(childIndex, 1)
        }
    }
    return children
}

function play(root: Node): [Node, OpenList, ClosedList] {
    const openList: OpenList = new OpenList(root)
    const closedList: ClosedList = new ClosedList()
    let current = new Node()
    let counter = 0
    while (openList.getNodes().length) {
        counter++
        current = openList.exitFirst() as Node

        show(current)
        if (current && !current.getCost()) {
            return [current, openList, closedList]
        }

        const children = current.getChildren()
        const validChildren = removeDuplicatedChild(children, openList, closedList)

        closedList.add(current)
        openList.addBatch(validChildren)
        openList.sort()
    }
    return [current, openList, closedList]
}

function main() {
    const root = new Node(undefined, new Board(INICIAL), 0)
    const gameResult = play(root)
    const lastNode = gameResult[0]
    const openList = gameResult[1]
    const closedList = gameResult[2]

    console.log('Atingimos o objetivo')
    console.log('Target: ', TARGET)
    console.log('Nodo final: ', lastNode.getBoard().get())
    console.log('Nível de profundidade do nodo final: ', lastNode.getLevel())
    console.log('Quantidade de nodos visitados: ', closedList.getNodes().length)
    console.log('Quantidade de nodos expandidos/criados: ', closedList.getNodes().length + openList.getNodes().length)
}

main()

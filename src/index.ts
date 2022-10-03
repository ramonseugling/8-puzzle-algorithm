import { INICIAL } from './constants/inicial'
import { TARGET } from './constants/target'
import { Board } from './entities/board'
import { Node } from './entities/node'

// eslint-disable-next-line max-lines-per-function
function play(root: Node): Node {
    const openList: Node[] = [root]
    const closedList = []

    let current = new Node()
    // let counter = 0
    while (openList.length) {
        // counter ++
        // console.log('==============')
        // console.log('Counter: ', counter)
        current = openList.shift() as Node
        closedList.push(current)
        for (let index = 0; index < current.getBoard().get().length; index++) {
            let line = ''
            for (let indox = 0; indox < current.getBoard().get()[index].length; indox++) {
                line += current.getBoard().get()[index][indox]
            }
            console.log(line)
        }

        if (current && !current.getCost()) {
            return current
        }
        const children = current.getChildren()
        console.log('Novos filhos: ', children)
        for (let index = 0; index < openList.length; index++) {
            const temp = openList[index]
            for (let childIndex = 0; childIndex < children.length; childIndex++) {
                if (children[childIndex].equal(temp)) {
                    children.splice(childIndex, 1)
                }
            }
        }

        for (let index = 0; index < closedList.length; index++) {
            const temp = closedList[index]
            for (let childIndex = 0; childIndex < children.length; childIndex++) {
                if (children[childIndex].equal(temp)) {
                    children.splice(childIndex, 1)
                }
            }
        }

        for (let index = 0; index < children.length; index++) {
            openList.push(children[index]) 
        }

        openList.sort((item1, item2) => {
            if (item1.getCost() > item2.getCost()) {
                return 1
            }
            if (item1.getCost() < item2.getCost()) {
                return -1
            }
            return 0
        })
        // console.log('Lista aberta: ', openList)
    }
    return current
}

function main() {
    const root = new Node(undefined, new Board(INICIAL), 0)
    const lastNode = play(root)

    console.log('Atingimos o objetivo')
    console.log('Target: ', TARGET)
    console.log('Nodo final: ', lastNode.getBoard().get())
    console.log('Nível do nodo final: ', lastNode.getLevel())
}

main()

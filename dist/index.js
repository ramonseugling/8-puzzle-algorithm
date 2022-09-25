"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const board_1 = require("./entities/board");
const matrix_1 = require("./entities/matrix");
const coordinate_1 = require("./entities/coordinate");
function main() {
    const matrix = new matrix_1.Matrix(5, 5);
    const board = new board_1.Board(matrix);
    const initialCoordinate = new coordinate_1.Coordinate(1, 2);
    const targetCoordinate = new coordinate_1.Coordinate(4, 4);
    board.setInitial(initialCoordinate);
    board.setTarget(targetCoordinate);
    let initial = board.getNodexByCoordinate(initialCoordinate);
    let target = board.getNodexByCoordinate(targetCoordinate);
    while (true) {
        console.log('Iniciou um novo ciclo');
        console.log(initial.getCoordinate().x);
        console.log(initial.getCoordinate().y);
        if (initial.getCoordinate().x === target.getCoordinate().x && initial.getCoordinate().y === target.getCoordinate().y) {
            console.log('Atingimos o objetivo');
            return;
        }
        const vizinhos = initial.getNeighbors();
        const vizinhosValidos = vizinhos.filter((item) => { return board.exists(item.nodex.getCoordinate()); });
        let maisProximo = vizinhosValidos[0].nodex;
        for (let index = 0; index < vizinhosValidos.length; index++) {
            vizinhosValidos[index].nodex.setTarget(targetCoordinate);
            vizinhosValidos[index].nodex.calculateTargetDistance();
            const distanciaCalculada = vizinhosValidos[index].nodex.getTargetDistance();
            if (maisProximo.getTargetDistance() && maisProximo.getTargetDistance() > distanciaCalculada) {
                maisProximo = vizinhosValidos[index].nodex;
            }
        }
        initial = board.getNodexByCoordinate(maisProximo.getCoordinate());
    }
}
main();
//# sourceMappingURL=index.js.map
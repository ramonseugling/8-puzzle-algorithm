"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const board_1 = require("./entities/board");
const coordinate_1 = require("./entities/coordinate");
function main() {
    const board = new board_1.Board(5, 5, new coordinate_1.Coordinate(2, 1), new coordinate_1.Coordinate(4, 4));
    const initial = board.getNodexByCoordinate(board.getInitial());
    initial.setTarget(board.getTarget());
    let listaAbertos = [initial];
    let listaFechados = [];
    let contador = 0;
    while (contador < 100) {
        let nodoAtual = listaAbertos[0];
        board.initial = nodoAtual.getCoordinate();
        board.show();
        if (nodoAtual.getCoordinate().x === board.getTarget().x && nodoAtual.getCoordinate().y === board.getTarget().y) {
            console.log('Atingimos o objetivo');
            console.log('Quantidade de iterações: ', contador);
            return;
        }
        const vizinhos = nodoAtual.getNeighbors();
        const vizinhosValidos = vizinhos.filter((item) => { return board.exists(item.nodex.getCoordinate()); });
        for (let index = 0; index < vizinhosValidos.length; index++) {
            vizinhosValidos[index].nodex.setTarget(board.getTarget());
            listaAbertos.push(vizinhosValidos[index].nodex);
        }
        listaFechados.push(listaAbertos.shift());
        listaAbertos = listaAbertos.sort((item1, item2) => {
            if (item1.getTargetDistance() > item2.getTargetDistance()) {
                return 1;
            }
            if (item1.getTargetDistance() < item2.getTargetDistance()) {
                return -1;
            }
            return 0;
        });
        contador++;
    }
}
main();
//# sourceMappingURL=index.js.map
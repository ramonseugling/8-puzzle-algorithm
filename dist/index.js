"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const board_1 = require("./entities/board");
const matrix_1 = require("./entities/matrix");
const coordinate_1 = require("./entities/coordinate");
function main() {
    const matrix = new matrix_1.Matrix(5, 5);
    const board = new board_1.Board(matrix);
    const initialCoordinate = new coordinate_1.Coordinate(1, 2);
    const targetCoordinate = new coordinate_1.Coordinate(4, 0);
    board.setInitial(initialCoordinate);
    board.setTarget(targetCoordinate);
    let initial = board.getNodexByCoordinate(initialCoordinate);
    let target = board.getNodexByCoordinate(targetCoordinate);
    let listaAbertos = [initial];
    let listaFechados = [];
    let contador = 0;
    while (contador < 100) {
        contador++;
        console.log('======================');
        console.log('Iniciou um novo ciclo');
        let nodoAtual = listaAbertos[0];
        console.log('Nodo atual: ', nodoAtual);
        console.log('Coordenadas iniciais: ', nodoAtual.getCoordinate().x, nodoAtual.getCoordinate().y);
        console.log('Verificando objetivo');
        if (nodoAtual.getCoordinate().x === target.getCoordinate().x && nodoAtual.getCoordinate().y === target.getCoordinate().y) {
            console.log('Atingimos o objetivo');
            console.log('Quantidade de iterações: ', contador);
            return;
        }
        console.log('Não atingimos o objetivo :(');
        const vizinhos = nodoAtual.getNeighbors();
        console.log('Encontramos os vizinhos');
        const vizinhosValidos = vizinhos.filter((item) => { return board.exists(item.nodex.getCoordinate()); });
        console.log('Filtramos pelos vizinhos válidos');
        for (let index = 0; index < vizinhosValidos.length; index++) {
            vizinhosValidos[index].nodex.setTarget(targetCoordinate);
            vizinhosValidos[index].nodex.calculateTargetDistance();
            console.log('Calculamos o custo para atingir o objeitvo do vizinho: ', vizinhosValidos[index].nodex.getCoordinate().x, vizinhosValidos[index].nodex.getCoordinate().y);
        }
        console.log('Ordenando os vizinhos');
        let listaOrdenada = vizinhosValidos.sort((item1, item2) => {
            if (item1.nodex.getTargetDistance() > item2.nodex.getTargetDistance()) {
                return 1;
            }
            if (item1.nodex.getTargetDistance() < item2.nodex.getTargetDistance()) {
                return -1;
            }
            return 0;
        });
        console.log('Selecionando o mais próximo: ', listaOrdenada[0].nodex);
        let nodoMaisProximo = listaOrdenada[0].nodex;
        console.log('Incluimos o atual na lista de fechados');
        listaFechados.push(nodoAtual);
        console.log('Removemos o atual da lista de abertos');
        console.log('Lista abertos antes: ', listaAbertos);
        listaAbertos.shift();
        console.log('Lista abertos depois: ', listaAbertos);
        console.log('Incluimos os novos vizinhos na lista de abertos');
        for (let index = 0; index < listaOrdenada.length; index++) {
            const element = listaOrdenada[index];
            console.log('Lista de abertos', listaOrdenada[index].nodex.getCoordinate());
            listaAbertos.push(element.nodex);
        }
        listaAbertos = listaAbertos.sort((item1, item2) => {
            if (item1.getTargetDistance() > item2.getTargetDistance()) {
                return 1;
            }
            if (item1.getTargetDistance() < item2.getTargetDistance()) {
                return -1;
            }
            return 0;
        });
        console.log(listaAbertos);
    }
}
main();
//# sourceMappingURL=index.js.map
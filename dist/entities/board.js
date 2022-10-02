"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Board = void 0;
class Board {
    constructor(value) {
        this.value = value ? value : Math.floor(Math.random() * 100);
    }
    set(value) {
        this.value = value ? value : Math.floor(Math.random() * 100);
    }
    get() {
        return this.value;
    }
}
exports.Board = Board;
//# sourceMappingURL=board.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClosedList = void 0;
class ClosedList {
    constructor() {
        this.nodes = [];
    }
    getNodes() { return this.nodes; }
    add(node) {
        if (node) {
            this.nodes.push(node);
        }
    }
}
exports.ClosedList = ClosedList;
//# sourceMappingURL=closed-list.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClosedList = void 0;
const node_1 = require("./node");
class ClosedList {
    constructor() {
        this.nodes = [];
    }
    getNodes() {
        return this.nodes;
    }
    add(node) {
        if (node) {
            this.nodes.push(node);
        }
    }
    find(node) {
        for (let index = 0; index < this.nodes.length; index++) {
            const temp = this.nodes[index];
            if (node.equal(temp)) {
                return this.nodes[index];
            }
        }
        return new node_1.Node();
    }
    exists(node) {
        for (let index = 0; index < this.nodes.length; index++) {
            const temp = this.nodes[index];
            if (node.equal(temp)) {
                return true;
            }
        }
        return false;
    }
}
exports.ClosedList = ClosedList;
//# sourceMappingURL=closed-list.js.map
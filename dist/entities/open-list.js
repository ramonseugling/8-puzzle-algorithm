"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenList = void 0;
const node_1 = require("./node");
class OpenList {
    constructor(initial) {
        this.nodes = [];
        this.nodes.push(initial);
    }
    add(node) {
        this.nodes.push(node);
    }
    addBatch(nodes) {
        for (let index = 0; index < nodes.length; index++) {
            this.nodes.push(nodes[index]);
        }
    }
    exitFirst() {
        return this.nodes.shift();
    }
    sort() {
        this.nodes = this.nodes.sort((item1, item2) => {
            if (item1.getCost() > item2.getCost()) {
                return 1;
            }
            if (item1.getCost() < item2.getCost()) {
                return -1;
            }
            return 0;
        });
    }
    getNodes() {
        return this.nodes;
    }
    find(node) {
        for (let index = 0; index < this.nodes.length; index++) {
            const temp = this.nodes[index];
            if (node.equal(temp)) {
                console.log(this.nodes[index].getFather());
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
exports.OpenList = OpenList;
//# sourceMappingURL=open-list.js.map
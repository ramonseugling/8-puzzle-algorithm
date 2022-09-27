"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenList = void 0;
class OpenList {
    constructor(initial) {
        this.nodes = [];
        this.nodes.push(initial);
    }
    add(node) {
        this.nodes.push(node);
    }
    exitFirst() {
        return this.nodes.shift();
    }
    sort() {
        this.nodes = this.nodes.sort((item1, item2) => {
            if (item1.getTargetDistance() > item2.getTargetDistance()) {
                return 1;
            }
            if (item1.getTargetDistance() < item2.getTargetDistance()) {
                return -1;
            }
            return 0;
        });
    }
    getNodes() {
        return this.nodes;
    }
    getFirst() {
        return this.nodes[0];
    }
}
exports.OpenList = OpenList;
//# sourceMappingURL=open-list.js.map
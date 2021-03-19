"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nodes_1 = require("./nodes");
exports.createTrieFromList = (list) => {
    const root = nodes_1.createRootNode();
    for (const rule of list) {
        let node = root;
        for (const label of rule.split(".").reverse()) {
            node = nodes_1.createOrGetChild(node, label);
        }
    }
    return root;
};
//# sourceMappingURL=create-trie.js.map
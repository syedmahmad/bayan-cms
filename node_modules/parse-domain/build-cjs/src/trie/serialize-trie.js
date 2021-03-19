"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const characters_1 = require("./characters");
exports.serializeTrie = (root) => {
    let serialized = "";
    const queue = Array.from(root.children.values());
    let current;
    while ((current = queue.shift()) !== undefined) {
        if (current === characters_1.UP) {
            serialized += characters_1.UP;
            continue;
        }
        serialized += current.label;
        if (current.children.size === 0) {
            if (queue.length > 0 && queue[0] !== characters_1.UP) {
                serialized += characters_1.SAME;
            }
            continue;
        }
        serialized += characters_1.DOWN;
        const newItems = Array.from(current.children.values());
        if (queue.length > 0) {
            newItems.push(characters_1.UP);
        }
        queue.unshift(...newItems);
    }
    return serialized;
};
//# sourceMappingURL=serialize-trie.js.map
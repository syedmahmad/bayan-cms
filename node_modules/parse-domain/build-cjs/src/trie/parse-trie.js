"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const characters = __importStar(require("./characters"));
const nodes_1 = require("./nodes");
exports.parseTrie = (serializedTrie) => {
    const rootNode = nodes_1.createRootNode();
    let domain = "";
    let parentNode = rootNode;
    // Type assertion necessary here due to a TypeScript unsoundness
    // https://github.com/microsoft/TypeScript/issues/9998#issuecomment-235963457
    let node = rootNode;
    const addDomain = () => {
        node = nodes_1.createOrGetChild(parentNode, domain);
        domain = "";
    };
    for (let i = 0; i < serializedTrie.length; i++) {
        const char = serializedTrie.charAt(i);
        switch (char) {
            case characters.SAME: {
                addDomain();
                continue;
            }
            case characters.DOWN: {
                addDomain();
                parentNode = node;
                continue;
            }
            case characters.RESET: {
                addDomain();
                parentNode = rootNode;
                continue;
            }
            case characters.UP: {
                if (parentNode.type === nodes_1.NODE_TYPE_ROOT) {
                    throw new Error(`Error in serialized trie at position ${i}: Cannot go up, current parent node is already root`);
                }
                addDomain();
                parentNode = parentNode.parent;
                continue;
            }
        }
        domain += char;
    }
    if (domain !== "") {
        addDomain();
    }
    return rootNode;
};
//# sourceMappingURL=parse-trie.js.map
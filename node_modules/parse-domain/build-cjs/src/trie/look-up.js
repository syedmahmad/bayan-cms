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
exports.lookUpTldsInTrie = (labels, trie) => {
    const labelsToCheck = labels.slice();
    const tlds = [];
    let node = trie;
    while (labelsToCheck.length !== 0) {
        const label = labelsToCheck.pop();
        const labelLowerCase = label.toLowerCase();
        if (node.children.has(characters.WILDCARD)) {
            if (node.children.has(characters.EXCEPTION + labelLowerCase)) {
                break;
            }
            node = node.children.get(characters.WILDCARD);
        }
        else {
            if (node.children.has(labelLowerCase) === false) {
                break;
            }
            node = node.children.get(labelLowerCase);
        }
        tlds.unshift(label);
    }
    return tlds;
};
//# sourceMappingURL=look-up.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NODE_TYPE_ROOT = Symbol("ROOT");
exports.NODE_TYPE_CHILD = Symbol("CHILD");
exports.createRootNode = () => {
    return {
        type: exports.NODE_TYPE_ROOT,
        children: new Map(),
    };
};
exports.createOrGetChild = (parent, label) => {
    let child = parent.children.get(label);
    if (child === undefined) {
        child = {
            type: exports.NODE_TYPE_CHILD,
            label,
            children: new Map(),
            parent,
        };
        parent.children.set(label, child);
    }
    return child;
};
//# sourceMappingURL=nodes.js.map
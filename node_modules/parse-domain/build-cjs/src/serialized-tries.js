"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const icann_json_1 = __importDefault(require("../serialized-tries/icann.json"));
exports.icannTrie = icann_json_1.default;
const private_json_1 = __importDefault(require("../serialized-tries/private.json"));
exports.privateTrie = private_json_1.default;
//# sourceMappingURL=serialized-tries.js.map
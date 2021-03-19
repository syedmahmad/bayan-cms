"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const fetch_psl_1 = require("./psl/fetch-psl");
const build_tries_1 = require("./psl/build-tries");
const serialize_trie_1 = require("./trie/serialize-trie");
exports.fetchBuildSerializeTries = () => __awaiter(void 0, void 0, void 0, function* () {
    const psl = yield fetch_psl_1.fetchPsl();
    const { icannTrie, privateTrie } = build_tries_1.buildTries(psl);
    const serializedIcannTrie = serialize_trie_1.serializeTrie(icannTrie);
    const serializedPrivateTrie = serialize_trie_1.serializeTrie(privateTrie);
    return {
        serializedIcannTrie,
        serializedPrivateTrie,
    };
});
//# sourceMappingURL=update-tries.js.map
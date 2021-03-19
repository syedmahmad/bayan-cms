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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const fs_1 = __importDefault(require("fs"));
const util_1 = require("util");
const update_tries_1 = require("../update-tries");
const config_1 = require("../config");
// TODO: Replace this with fs promises once we removed Node 8
const fs = {
    writeFile: util_1.promisify(fs_1.default.writeFile),
};
const writeTriesToFiles = ({ serializedIcannTrie, serializedPrivateTrie, }) => __awaiter(void 0, void 0, void 0, function* () {
    const indexOfScriptArg = process.argv.lastIndexOf("--");
    const targetDirectories = process.argv.slice(indexOfScriptArg + 1);
    yield Promise.all(targetDirectories.map((targetDirectory) => __awaiter(void 0, void 0, void 0, function* () {
        const pathToIcannTrie = path_1.resolve(__dirname, targetDirectory, "icann.json");
        const pathToPrivateTrie = path_1.resolve(__dirname, targetDirectory, "private.json");
        const pathToTrieInfoFile = path_1.resolve(__dirname, targetDirectory, "info.json");
        console.warn(`Writing ${pathToIcannTrie}...`);
        console.warn(`Writing ${pathToPrivateTrie}...`);
        console.warn(`Writing ${pathToTrieInfoFile}...`);
        yield Promise.all([
            fs.writeFile(pathToIcannTrie, JSON.stringify(serializedIcannTrie)),
            fs.writeFile(pathToPrivateTrie, JSON.stringify(serializedPrivateTrie)),
            fs.writeFile(pathToTrieInfoFile, JSON.stringify({
                updatedAt: new Date(),
            })),
        ]);
    })));
});
exports.done = (() => __awaiter(void 0, void 0, void 0, function* () {
    console.warn(`Fetching public suffix list from ${config_1.PUBLIC_SUFFIX_URL}...`);
    yield writeTriesToFiles(yield update_tries_1.fetchBuildSerializeTries());
}))();
//# sourceMappingURL=update-tries.js.map
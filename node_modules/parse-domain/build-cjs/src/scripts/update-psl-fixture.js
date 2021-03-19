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
const fetch_psl_1 = require("../psl/fetch-psl");
// TODO: Replace this with fs promises once we removed Node 8
const fs = {
    writeFile: util_1.promisify(fs_1.default.writeFile),
};
exports.done = (() => __awaiter(void 0, void 0, void 0, function* () {
    const pathToPslFixture = path_1.resolve(__dirname, "tests", "fixtures", "public-suffix-list.txt");
    const psl = yield fetch_psl_1.fetchPsl();
    yield fs.writeFile(pathToPslFixture, psl);
}))();
//# sourceMappingURL=update-psl-fixture.js.map
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
const assert_1 = require("assert");
const node_fetch_1 = __importDefault(require("node-fetch"));
const config_1 = require("../config");
exports.fetchPsl = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield node_fetch_1.default(config_1.PUBLIC_SUFFIX_URL);
    const pslContent = yield response.text();
    // Sanity check
    assert_1.ok(pslContent.length >= config_1.FETCH_PSL_EXPECTED_MIN_LENGTH, "Public suffix list is shorter than expected");
    return pslContent;
});
//# sourceMappingURL=fetch-psl.js.map
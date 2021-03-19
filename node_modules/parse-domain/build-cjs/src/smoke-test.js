"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("assert");
const main_1 = require("./main");
exports.runSmokeTest = () => {
    assert_1.deepStrictEqual(main_1.parseDomain("www.example.com"), {
        hostname: "www.example.com",
        type: "LISTED",
        labels: ["www", "example", "com"],
        subDomains: ["www"],
        domain: "example",
        topLevelDomains: ["com"],
        icann: {
            subDomains: ["www"],
            domain: "example",
            topLevelDomains: ["com"],
        },
    });
    assert_1.deepStrictEqual(main_1.parseDomain("www.example.co.uk"), {
        hostname: "www.example.co.uk",
        type: "LISTED",
        labels: ["www", "example", "co", "uk"],
        subDomains: ["www"],
        domain: "example",
        topLevelDomains: ["co", "uk"],
        icann: {
            subDomains: ["www"],
            domain: "example",
            topLevelDomains: ["co", "uk"],
        },
    });
    assert_1.deepStrictEqual(main_1.parseDomain("www.example.cloudfront.net"), {
        hostname: "www.example.cloudfront.net",
        type: "LISTED",
        labels: ["www", "example", "cloudfront", "net"],
        subDomains: ["www"],
        domain: "example",
        topLevelDomains: ["cloudfront", "net"],
        icann: {
            subDomains: ["www", "example"],
            domain: "cloudfront",
            topLevelDomains: ["net"],
        },
    });
    // TODO: Use fromUrl once we dropped Node v8 support
    // deepStrictEqual(parseDomain(fromUrl("www.食狮.公司.cn")), {
    assert_1.deepStrictEqual(main_1.parseDomain("www.xn--85x722f.xn--55qx5d.cn"), {
        hostname: "www.xn--85x722f.xn--55qx5d.cn",
        type: "LISTED",
        labels: ["www", "xn--85x722f", "xn--55qx5d", "cn"],
        subDomains: ["www"],
        domain: "xn--85x722f",
        topLevelDomains: ["xn--55qx5d", "cn"],
        icann: {
            subDomains: ["www"],
            domain: "xn--85x722f",
            topLevelDomains: ["xn--55qx5d", "cn"],
        },
    });
};
//# sourceMappingURL=smoke-test.js.map
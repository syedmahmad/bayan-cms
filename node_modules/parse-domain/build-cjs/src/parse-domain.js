"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const serialized_tries_1 = require("./serialized-tries");
const look_up_1 = require("./trie/look-up");
const sanitize_1 = require("./sanitize");
const parse_trie_1 = require("./trie/parse-trie");
exports.RESERVED_TOP_LEVEL_DOMAINS = [
    "localhost",
    "local",
    "example",
    "invalid",
    "test",
];
var ParseResultType;
(function (ParseResultType) {
    /**
     * This parse result is returned in case the given hostname does not adhere to [RFC 1034](https://tools.ietf.org/html/rfc1034).
     */
    ParseResultType["Invalid"] = "INVALID";
    /**
     * This parse result is returned if the given hostname was an IPv4 or IPv6.
     */
    ParseResultType["Ip"] = "IP";
    /**
     * This parse result is returned when the given hostname
     * - is the root domain (the empty string `""`)
     * - belongs to the top-level domain `localhost`, `local`, `example`, `invalid` or `test`
     */
    ParseResultType["Reserved"] = "RESERVED";
    /**
     * This parse result is returned when the given hostname is valid and does not belong to a reserved top-level domain, but is not listed in the public suffix list.
     */
    ParseResultType["NotListed"] = "NOT_LISTED";
    /**
     * This parse result is returned when the given hostname belongs to a top-level domain that is listed in the public suffix list.
     */
    ParseResultType["Listed"] = "LISTED";
})(ParseResultType = exports.ParseResultType || (exports.ParseResultType = {}));
const getAtIndex = (array, index) => {
    return index >= 0 && index < array.length ? array[index] : undefined;
};
const splitLabelsIntoDomains = (labels, index) => {
    return {
        subDomains: labels.slice(0, Math.max(0, index)),
        domain: getAtIndex(labels, index),
        topLevelDomains: labels.slice(index + 1),
    };
};
let parsedIcannTrie;
let parsedPrivateTrie;
/**
 * Splits the given hostname in topLevelDomains, a domain and subDomains.
 */
exports.parseDomain = (hostname) => {
    const sanitizationResult = sanitize_1.sanitize(hostname);
    if (sanitizationResult.type === sanitize_1.SanitizationResultType.Error) {
        return {
            type: ParseResultType.Invalid,
            hostname,
            errors: sanitizationResult.errors,
        };
    }
    if (sanitizationResult.type === sanitize_1.SanitizationResultType.ValidIp) {
        return {
            type: ParseResultType.Ip,
            hostname: sanitizationResult.ip,
            ipVersion: sanitizationResult.ipVersion,
        };
    }
    const { labels, domain } = sanitizationResult;
    if (hostname === "" ||
        exports.RESERVED_TOP_LEVEL_DOMAINS.includes(labels[labels.length - 1])) {
        return {
            type: ParseResultType.Reserved,
            hostname: domain,
            labels,
        };
    }
    // Parse the serialized trie lazily
    parsedIcannTrie = parsedIcannTrie !== null && parsedIcannTrie !== void 0 ? parsedIcannTrie : parse_trie_1.parseTrie(serialized_tries_1.icannTrie);
    parsedPrivateTrie = parsedPrivateTrie !== null && parsedPrivateTrie !== void 0 ? parsedPrivateTrie : parse_trie_1.parseTrie(serialized_tries_1.privateTrie);
    const icannTlds = look_up_1.lookUpTldsInTrie(labels, parsedIcannTrie);
    const privateTlds = look_up_1.lookUpTldsInTrie(labels, parsedPrivateTrie);
    if (icannTlds.length === 0 && privateTlds.length === 0) {
        return {
            type: ParseResultType.NotListed,
            hostname: domain,
            labels,
        };
    }
    const indexOfPublicSuffixDomain = labels.length - Math.max(privateTlds.length, icannTlds.length) - 1;
    const indexOfIcannDomain = labels.length - icannTlds.length - 1;
    return Object.assign({ type: ParseResultType.Listed, hostname: domain, labels, icann: splitLabelsIntoDomains(labels, indexOfIcannDomain) }, splitLabelsIntoDomains(labels, indexOfPublicSuffixDomain));
};
//# sourceMappingURL=parse-domain.js.map
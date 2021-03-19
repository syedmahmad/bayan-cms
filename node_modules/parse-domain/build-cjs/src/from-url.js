"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const urlPattern = /^[a-z]+:\/\//i;
exports.NO_HOSTNAME = Symbol("NO_HOSTNAME");
exports.fromUrl = (urlLike) => {
    /* istanbul ignore next */
    if (typeof URL !== "function") {
        throw new Error("Looks like the new URL() constructor is not globally available in your environment. Please make sure to use a polyfill.");
    }
    // Extra check for non-TypeScript users
    if (typeof urlLike !== "string") {
        return exports.NO_HOSTNAME;
    }
    // URLs that start with // are protocol relative
    const url = urlLike.startsWith("//")
        ? `http:${urlLike}`
        : // URLs that start with / do not have a hostname section
            urlLike.startsWith("/")
                ? urlLike
                : urlPattern.test(urlLike)
                    ? urlLike
                    : `http://${urlLike}`;
    try {
        return new URL(url).hostname;
    }
    catch (_a) {
        return exports.NO_HOSTNAME;
    }
};
//# sourceMappingURL=from-url.js.map
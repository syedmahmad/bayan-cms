
'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./bundle.production.js");
} else {
  module.exports = require("./bundle.development.js");
}

const path = require("path");

/** @type {import("next").NextConfig} */
module.exports = {
  compiler: {
    styledComponents: true,
  },
  // Anchor file tracing here so a lockfile in a parent directory is never mistaken for the root.
  outputFileTracingRoot: path.join(__dirname),
};

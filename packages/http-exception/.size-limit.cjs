// @ts-check

const fullEsmMaxSize = "2900B";
const fullCjsMaxSize = "3100B";

/**
 * Will ensure esm tree-shakeability and total size are within expectations.
 *
 * @link https://github.com/ai/size-limit/
 * @type {{name: string, path: string[], limit: string, import?: string, webpack?: boolean}[]}
 */
module.exports = [
  // ###################################################
  // ESM full bundle and individual imports
  // ###################################################
  {
    name: "ESM (import everything *)",
    path: ["dist/esm/index.mjs"],
    import: "*",
    limit: fullEsmMaxSize,
  },
  {
    name: "ESM (only HttpNotFound exception)",
    path: ["dist/esm/index.mjs"],
    import: "{ HttpNotFound }",
    limit: "1100B",
  },
  {
    name: "ESM (only HttpInternalServerError)",
    path: ["dist/esm/index.mjs"],
    import: "{ HttpInternalServerError }",
    limit: "1100B",
  },
  {
    name: "ESM (two exceptions: HttpNotFound + HttpInternalServerError)",
    path: ["dist/esm/index.mjs"],
    import: "{ HttpNotFound, HttpInternalServerError }",
    limit: "1200B",
  },
  {
    name: "ESM (only isHttpException)",
    path: ["dist/esm/index.mjs"],
    import: "{ isHttpException }",
    limit: "1000B",
  },
  {
    name: "ESM (only createHttpException)",
    path: ["dist/esm/index.mjs"],
    import: "{ createHttpException }",
    limit: "2400B", // Will import all server/client exceptions
  },
  // ###################################################
  // Commonjs full bundle
  // ###################################################
  {
    name: "CJS (require everything *)",
    path: ["dist/cjs/index.cjs"],
    import: "*",
    webpack: true,
    limit: fullCjsMaxSize,
  },
  {
    name: "CJS (only isHttpException)",
    path: ["dist/cjs/index.cjs"],
    import: "{ isHttpException }",
    webpack: true,
    limit: '2200B',
  }
];

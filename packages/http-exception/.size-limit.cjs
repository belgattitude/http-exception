// @ts-check

const fullEsmMaxSize = "3900B";
const fullCjsMaxSize = "4100B";

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
    limit: "1150B",
  },
  {
    name: "ESM (only HttpInternalServerError)",
    path: ["dist/esm/index.mjs"],
    import: "{ HttpInternalServerError }",
    limit: "1150B",
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
  {
    name: "ESM ({ serializeHttpException, unserializeHttpException })",
    path: ["dist/esm/index.mjs"],
    import: "{ serializeHttpException, unserializeHttpException }",
    limit: "3400B", // Will import all server/client exceptions
  },
  {
    name: "ESM ({ serializeHttpException })",
    path: ["dist/esm/index.mjs"],
    import: "{ serializeHttpException }",
    limit: "1800B", // Will import all server/client exceptions
  },
  {
    name: "ESM ({ unserializeHttpException })",
    path: ["dist/esm/index.mjs"],
    import: "{ unserializeHttpException }",
    limit: "3000B", // Will import all server/client exceptions
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
    limit: '2300B',
  }
];

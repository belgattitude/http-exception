// @ts-check

// Regularly update this max size when new legit code is added (keep a threshold)
const fullBundleMaxSize = "2500B";

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
    path: ["dist/esm/index.js"],
    import: "*",
    limit: fullBundleMaxSize,
  },
  {
    name: "ESM (only HttpNotFound exception)",
    path: ["dist/esm/index.js"],
    import: "{ HttpNotFound }",
    limit: "360B",
  },
  {
    name: "ESM (only HttpInternalServerError)",
    path: ["dist/esm/index.js"],
    import: "{ HttpInternalServerError }",
    limit: "370B",
  },
  {
    name: "ESM (two exceptions: HttpNotFound + HttpInternalServerError)",
    path: ["dist/esm/index.js"],
    import: "{ HttpNotFound, HttpInternalServerError }",
    limit: "420B",
  },
  {
    name: "ESM (only isHttpException)",
    path: ["dist/esm/index.js"],
    import: "{ isHttpException }",
    limit: "290B",
  },
  {
    name: "ESM (only createHttpException)",
    path: ["dist/esm/index.js"],
    import: "{ createHttpException }",
    limit: "1750B", // Will import all server/client exceptions
  },
  // ###################################################
  // Commonjs full bundle
  // ###################################################
  {
    name: "CJS (require everything *)",
    path: ["dist/cjs/index.js"],
    import: "*",
    webpack: true,
    limit: fullBundleMaxSize,
  }
];

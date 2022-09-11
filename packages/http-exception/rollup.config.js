/* eslint-disable sonarjs/no-duplicate-string */

import { createRequire } from 'node:module';
import dts from 'rollup-plugin-dts';
import esbuild from 'rollup-plugin-esbuild';
const require = createRequire(import.meta.url);

const pkg = require('./package.json');

const config = {
  distDir: './dist',
  ecmascriptLevel: 'es2017',
  sourceMap: process.env.NODE_ENV === 'production',
  external: [
    ...Object.keys(pkg.dependencies ?? {}),
    ...Object.keys(pkg?.peerDependencies ?? {}),
  ],
};

/**
 *
 * @param format
 * @param minify
 * @returns {Plugin}
 */
const getEsbuildPlugin = (format, minify) => {
  return esbuild({
    format,
    tsconfig: './tsconfig.build.json',
    treeShaking: true,
    platform: 'browser',
    target: [config.ecmascriptLevel],
    minify: minify,
    minifyWhitespace: minify, // setting to false allows to create patches
    minifyIdentifiers: minify,
  });
};

export default () => [
  // ESM
  {
    input: ['./src/index.ts'],
    preserveModules: true,
    external: config.external,
    plugins: [getEsbuildPlugin('esm', true)],
    output: {
      dir: `${config.distDir}/esm`,
      format: 'esm',
      sourcemap: config.sourceMap,
    },
  },
  // CJS
  {
    input: ['./src/index.ts'],
    preserveModules: false,
    external: config.external,
    plugins: [getEsbuildPlugin('esm', true)],
    output: {
      dir: `${config.distDir}/cjs`,
      format: 'cjs',
      sourcemap: config.sourceMap,
    },
  },
  // Typings
  {
    input: './src/index.ts',
    output: {
      file: `${config.distDir}/types/index.d.ts`,
    },
    external: config.external,
    plugins: [
      dts({
        compilerOptions: {
          tsBuildInfoFile: './tsconfig.tsbuildinfo.dts',
        },
      }),
    ],
  },
];

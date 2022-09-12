/* eslint-disable sonarjs/no-duplicate-string */

import { createRequire } from 'node:module';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import esbuild from 'rollup-plugin-esbuild';
import { terser } from 'rollup-plugin-terser';
import { globalCachePath } from '../../cache.config.mjs';
const require = createRequire(import.meta.url);

const pkg = require('./package.json');

const config = {
  distDir: './dist',
  ecmascriptLevel: 'es2017',
  sourceMap: false, // process.env.NODE_ENV === 'production',
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
    mangleQuoted: !minify,
    minifyWhitespace: minify, // setting to false allows to create patches
    minifyIdentifiers: minify,
  });
};

const getTypescriptPlugin = (format, minify) => {
  return typescript({
    tsconfig: './tsconfig.build.json',
    target: config.ecmascriptLevel,
    sourceMap: false,
    cacheDir: `${globalCachePath}/rollup/http-exception-${format}`,
    compilerOptions: {
      incremental: false,
      // inlineSourceMap: true,
      // sourceMap: true
    },
  });
};

export default () => [
  // ESM
  {
    input: ['./src/index.ts'],
    preserveModules: true,
    external: config.external,
    plugins: [getTypescriptPlugin('esm', false)],
    // plugins: [getEsbuildPlugin('esm', false)],
    output: {
      dir: `${config.distDir}/esm`,
      format: 'esm',
      sourcemap: config.sourceMap,
      plugins: [
        terser({
          module: true,
          safari10: false,
          ie8: false,
          compress: true,
          ecma: 2017
        })
      ]
    },
  },
  // CJS
  {
    input: ['./src/index.ts'],
    preserveModules: false,
    external: config.external,
    plugins: [getTypescriptPlugin('cjs', false)],
    // plugins: [getEsbuildPlugin('esm', true)],
    output: {
      dir: `${config.distDir}/cjs`,
      format: 'cjs',
      sourcemap: config.sourceMap,
      plugins: [
        terser({
          module: true,
          safari10: false,
          ie8: false,
          compress: true,
          ecma: 2017
        })
      ]
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

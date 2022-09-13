/* eslint-disable sonarjs/no-duplicate-string */

import { createRequire } from 'node:module';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import { terser } from 'rollup-plugin-terser';
import { globalCachePath } from '../../cache.config.mjs';
const require = createRequire(import.meta.url);

const pkg = require('./package.json');

const config = {
  distDir: './dist',
  ecmascriptLevel: '2017',
  sourceMap: false, // process.env.NODE_ENV === 'production',
  cache: false,
  external: [
    ...Object.keys(pkg.dependencies ?? {}),
    ...Object.keys(pkg?.peerDependencies ?? {}),
  ],
};

/**
 * @param { 'cjs' | 'esm' } format
 * @param { boolean } minify
 * @param { boolean } sourceMap
 * @param { boolean } cache
 */
const getDefaultRollupPlugins = (
  format,
  minify,
  sourceMap = false,
  cache = false
) => {
  return [
    typescript({
      tsconfig: './tsconfig.build.json',
      target: `es${config.ecmascriptLevel}`,
      sourceMap: sourceMap,
      cacheDir: cache
        ? `${globalCachePath}/rollup/http-exception-${format}`
        : false,
      compilerOptions: {
        target: `es${config.ecmascriptLevel}`,
        incremental: false,
        inlineSourceMap: sourceMap,
        sourceMap: sourceMap,
        removeComments: false,
      },
    }),
    ...(minify
      ? [
          terser({
            module: format === 'esm',
            compress: minify,
            ecma: config.ecmascriptLevel,
            format: {
              keep_quoted_props: true,
            },
            ie8: false,
            safari10: false,
            mangle: true, // Here mangling does not reduce size enough, let's keep clean
          }),
        ]
      : []),
  ];
};

export default () => [
  // ESM
  {
    input: ['./src/index.ts'],
    preserveModules: true,
    external: config.external,
    treeshake: true,
    plugins: [
      ...getDefaultRollupPlugins('esm', true, config.sourceMap, config.cache),
    ],
    output: {
      dir: `${config.distDir}/esm`,
      format: 'esm',
      sourcemap: config.sourceMap,
      hoistTransitiveImports: false,
    },
  },
  // CJS
  {
    input: ['./src/index.ts'],
    preserveModules: false,
    external: config.external,
    treeshake: false,
    plugins: [
      ...getDefaultRollupPlugins('cjs', true, config.sourceMap, config.cache),
    ],
    output: {
      dir: `${config.distDir}/cjs`,
      format: 'cjs',
      sourcemap: config.sourceMap,
      hoistTransitiveImports: false,
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

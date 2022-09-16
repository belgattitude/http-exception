/* eslint-disable sonarjs/no-duplicate-string */

import { createRequire } from 'node:module';
import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import dts from 'rollup-plugin-dts';
import { terser } from 'rollup-plugin-terser';
const require = createRequire(import.meta.url);

const pkg = require('./package.json');

const config = {
  distDir: './dist',
  ecmascriptLevel: '2015',
  sourceMap: false, // process.env.NODE_ENV === 'production',
  cache: false,
  extensions: ['.js', '.jsx', '.ts', '.tsx'],
  removeComments: true,
  minify: false,
  external: [
    ...Object.keys(pkg?.dependencies ?? {}),
    ...Object.keys(pkg?.peerDependencies ?? {}),
  ],
};

/**
 * @param { 'cjs' | 'esm' } format
 * @param { boolean } minify
 */
const getDefaultRollupPlugins = (format, minify) => {
  return [
    // Allows node_modules resolution
    resolve({ extensions: config.extensions }),
    // Allow bundling cjs modules. Rollup doesn't understand cjs
    commonjs(),
    // Bundle with babel (currently only the best size for spread/class transforms)
    babel({
      extensions: config.extensions,
      include: ['src/**/*'],
      babelHelpers: 'bundled',
    }),
    ...(minify
      ? [
          terser({
            module: format === 'esm',
            compress: {
              drop_console: true,
              drop_debugger: true,
              ecma: config.ecmascriptLevel,
              dead_code: true,
              directives: true,
              inline: false,
            },
            format: {
              beautify: true,
              comments: !config.removeComments,
            },
            mangle: false, // Here mangling does not reduce size enough, let's keep clean
          }),
        ]
      : []),
  ];
};

export default () => [
  // ESM
  {
    input: ['./src/index.ts'],
    preserveModules: true, // Will allow maximum tree-shakeability by bundlers such as webpack
    external: config.external,
    plugins: [...getDefaultRollupPlugins('esm', config.minify)],
    output: {
      format: 'esm',
      dir: `${config.distDir}/esm`,
      entryFileNames: '[name].js',
      sourcemap: config.sourceMap,
    },
  },
  // CJS
  {
    input: ['./src/index.ts'],
    preserveModules: false,
    external: config.external,
    plugins: [...getDefaultRollupPlugins('cjs', config.minify)],
    output: {
      format: 'cjs',
      dir: `${config.distDir}/cjs`,
      entryFileNames: '[name].cjs',
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

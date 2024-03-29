import path from 'path'
import resolve from 'rollup-plugin-node-resolve'
import replace from 'rollup-plugin-replace'
import commonjs from 'rollup-plugin-commonjs'
import svelte from 'rollup-plugin-svelte'
import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'
import postcss from 'rollup-plugin-postcss'
import json from 'rollup-plugin-json'
import sveltePreprocess from 'svelte-preprocess'
import config from 'sapper/config/rollup'
import pkg from './package.json'

const mode = process.env.NODE_ENV
const dev = mode === 'development'
const legacy = !!process.env.SAPPER_LEGACY_BUILD

const preprocess = sveltePreprocess({ postcss: true, preserve: 'ld+json' })

// eslint-disable-next-line no-shadow
const onwarn = (warning, onwarn) => (warning.code === 'CIRCULAR_DEPENDENCY'
    && /[/\\]@sapper[/\\]/.test(warning.message))
  || onwarn(warning)
const dedupe = importee => importee === 'svelte' || importee.startsWith('svelte/')

export default {
  client: {
    input: config.client.input(),
    output: config.client.output(),
    plugins: [
      replace({
        'process.browser': true,
        'process.env.NODE_ENV': JSON.stringify(mode),
        'process.env.GA_ID': JSON.stringify(process.env.GA_ID || ''),
      }),
      svelte({
        dev,
        hydratable: true,
        emitCss: true,
        preprocess,
      }),
      resolve({
        browser: true,
        dedupe,
      }),
      commonjs(),
      json({
        include: ['node_modules/markdown-it/**'],
        preferConst: true,
        compact: true,
      }),

      legacy
        && babel({
          extensions: ['.js', '.mjs', '.html', '.svelte'],
          runtimeHelpers: true,
          exclude: ['node_modules/@babel/**'],
          presets: [
            [
              '@babel/preset-env',
              {
                targets: '> 0.25%, not dead',
              },
            ],
          ],
          plugins: [
            '@babel/plugin-syntax-dynamic-import',
            [
              '@babel/plugin-transform-runtime',
              {
                useESModules: true,
              },
            ],
          ],
        }),

      !dev
        && terser({
          module: true,
        }),
    ],

    onwarn,
  },

  server: {
    input: config.server.input(),
    output: config.server.output(),
    plugins: [
      replace({
        'process.browser': false,
        'process.env.NODE_ENV': JSON.stringify(mode),
      }),
      svelte({
        generate: 'ssr',
        dev,
        preprocess,
      }),
      postcss({
        minimize: true,
        extract: path.resolve(__dirname, './static/index.css'),
      }),
      resolve({
        dedupe,
      }),
      commonjs(),
      json({
        include: ['node_modules/markdown-it/**'],
        preferConst: true,
        compact: true,
      }),
    ],
    external: Object.keys(pkg.dependencies).concat(
      require('module').builtinModules
        || Object.keys(process.binding('natives')),
    ),

    onwarn,
  },

  serviceworker: {
    input: config.serviceworker.input(),
    output: config.serviceworker.output(),
    plugins: [
      resolve(),
      replace({
        'process.browser': true,
        'process.env.NODE_ENV': JSON.stringify(mode),
      }),
      commonjs(),
      json({
        include: ['node_modules/markdown-it/**'],
        preferConst: true,
        compact: true,
      }),
      !dev && terser(),
    ],

    onwarn,
  },
}

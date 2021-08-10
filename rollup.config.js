import { DEFAULT_EXTENSIONS } from '@babel/core'
import analyze from 'rollup-plugin-analyzer'
import babel from 'rollup-plugin-babel'
import typescript from 'rollup-plugin-typescript2'
import commonjs from '@rollup/plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import resolve from '@rollup/plugin-node-resolve'
import url from '@rollup/plugin-url'
import svgr from '@svgr/rollup'
import { terser } from 'rollup-plugin-terser'

import pkg from './package.json'

export default {
  input: 'src/autoWidthInput/index.tsx',
  output: [
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
      globals: {
        "react": "React" 
      },
    },
    // {
    //   file: pkg.main,
    //   format: 'cjs',
    //   sourcemap: true,
    // },
    {
      file: pkg.main,
      format: 'umd',
      name: pkg.name,
      sourcemap: true,
      globals: {
        "react": "React" 
      },
    },
  ],
  
  plugins: [
    postcss({
      plugins: [],
      minimize: true,
      // sourceMap: 'inline',
      // plugins: [autoprefixer()],
      // sourceMap: true,
      extract: true,
      // minimize: true,
      modules: false,
      // modules: {
      //   localIdentName: 'fox-[local]',
      // },
    }),
    external({
      includeDependencies: true,
    }),
    typescript({
      typescript: require('typescript'),
      declaration: true,
      declarationDir:'./dist/lib/',
      include: ['*.js+(|x)', '**/*.js+(|x)', '**/*.ts+(|x)'],
      exclude: [
        'dist',
        'node_modules/**',
        '*.test.{js+(|x), ts+(|x)}',
        '**/*.test.{js+(|x), ts+(|x)}',
      ],
    }),
    babel({
      presets: [
        'react-app',
      ],
      extensions: [
        ...DEFAULT_EXTENSIONS,
        '.ts',
        '.tsx'
      ],
      plugins: [
        '@babel/plugin-proposal-object-rest-spread',
        '@babel/plugin-proposal-optional-chaining',
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-proposal-class-properties',
        'transform-react-remove-prop-types',
      ],
      exclude: '**/node_modules/**',
      runtimeHelpers: true,
    }),
    url(),
    svgr(),
    resolve(),
    commonjs(),
    terser(),
    analyze()
  ],
}
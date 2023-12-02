import { defineConfig } from 'tsup'
import pkg from './package.json'

export default defineConfig({
  entry: ['src/index.mts'],
  target: ['es2020'],
  format: ['cjs', 'esm', 'iife'],
  outExtension({ format }) {
    switch (format) {
      case 'cjs': {
        return { js: `.cjs` }
      }
      case 'esm': {
        return { js: `.mjs` }
      }
      default: {
        return { js: `.js` }
      }
    }
  },
  dts: true,
  banner: {
    js: [
      `/**`,
      ` * name: ${pkg.name}`,
      ` * version: v${pkg.version}`,
      ` * description: ${pkg.description}`,
      ` * author: ${pkg.author}`,
      ` * homepage: ${pkg.homepage}`,
      ` * license: ${pkg.license}`,
      ` */`,
    ].join('\n'),
  },
  bundle: true,
  minify: true,
  clean: true,
})

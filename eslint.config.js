// @ts-check
import { defineConfig, prettier, typescript } from '@bassist/eslint'

export default defineConfig([
  ...prettier,
  ...typescript,
  {
    ignores: ['dist', 'lib'],
  },
])

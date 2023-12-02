// @ts-check
import { defineConfig, prettier, typescript } from '@bassist/eslint'

export default defineConfig([
  ...prettier,
  ...typescript,
  {
    rules: {
      '@typescript-eslint/prefer-ts-expect-error': 'off',
    },
    ignores: ['dist', 'lib'],
  },
])

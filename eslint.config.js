// @ts-check
import { defineConfig, prettier, react } from '@bassist/eslint'

export default defineConfig([
  ...prettier,
  ...react,
  {
    rules: {
      '@typescript-eslint/prefer-ts-expect-error': 'off',
    },
    ignores: ['dist', 'lib'],
  },
])

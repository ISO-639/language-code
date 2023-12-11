const nextra = require('nextra')

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

const isProd = process.env.NODE_ENV === 'production'

module.exports = withNextra({
  output: 'export',
  distDir: 'dist',
  basePath: isProd ? '/language-code' : undefined,
  assetPrefix: isProd ? '/language-code/' : undefined,
  images: {
    unoptimized: true,
  },
})

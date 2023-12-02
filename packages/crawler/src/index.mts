import chalk from 'chalk'
import { randomNumber, sleep } from '@bassist/utils'
import { Crawler } from './crawler.mts'
import { Formatter } from './formatter.mts'
import { Generator } from './generator.mts'
import { LANGUAGES_CONFIG, VERSIONS } from './constants.mts'

async function gen(lang: string) {
  const { url, defaultValue, ...versionOptions } = LANGUAGES_CONFIG[lang]
  if (!url) return

  const crawler = new Crawler(url)
  const { $, rows } = await crawler.run()

  VERSIONS.forEach((version) => {
    const { keyIndex, valueIndex } = versionOptions[`v${version}`]

    const { record } = new Formatter({
      $,
      rows,
      defaultValue,
      keyIndex,
      valueIndex,
    })

    const generator = new Generator({ version, lang, record })
    generator.run()
  })
}

export async function run() {
  console.log()
  console.log('Starting...')

  const langs = Object.keys(LANGUAGES_CONFIG)
  const total = langs.length

  for (const lang in LANGUAGES_CONFIG) {
    if (Object.prototype.hasOwnProperty.call(LANGUAGES_CONFIG, lang)) {
      const index = langs.findIndex((i) => i === lang)
      const queue = langs.length - (index + 1)

      const waitingMessage =
        queue === 0
          ? 'The last one, about to end.'
          : `${total - (index + 1)} more are waiting...`

      console.log()
      console.log(`🧭 Crawling ${chalk.green(lang)} , ${waitingMessage}`)

      const ms = randomNumber(100, 500)
      await sleep(ms)
      await gen(lang)

      console.log(`🎉 Crawl ${chalk.green(lang)} done.`)
      console.log()
    }
  }

  console.log()
  console.log('🎉🎉🎉 All Done!')
  console.log()
}
run().catch((e) => {
  console.log(e)
})

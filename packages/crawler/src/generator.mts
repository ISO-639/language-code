import { existsSync, mkdirSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { type VERSIONS } from './constants.mts'

export interface GeneratorOptions {
  version: (typeof VERSIONS)[number]
  lang: string
  record: Record<string, string>
}

export class Generator {
  private version: GeneratorOptions['version']
  private record: GeneratorOptions['record']
  private outDir: string
  private output: string

  constructor({ version, lang, record }: GeneratorOptions) {
    this.version = version
    this.record = record
    this.outDir = this.getOutDir()
    this.output = `${this.outDir}/${lang}.json`
  }

  private getOutDir() {
    const __dirname = dirname(fileURLToPath(import.meta.url))
    return resolve(__dirname, `../../data/${this.version}`)
  }

  private mkdir() {
    if (!existsSync(this.outDir)) {
      mkdirSync(this.outDir)
    }
  }

  run() {
    this.mkdir()

    const content = JSON.stringify(this.record, null, 2)
    writeFileSync(this.output, content)
  }
}

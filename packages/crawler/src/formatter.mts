import type { BasicAcceptedElems, Cheerio, CheerioAPI, Element } from 'cheerio'
import type { IndexOptions } from './constants.mts'

export interface FormatterOptions extends IndexOptions {
  $: CheerioAPI
  rows: BasicAcceptedElems<Element>[]
  defaultValue?: string
}

const IGNORE_TEXT = ['&nbsp;', ' ']

export class Formatter {
  private $: FormatterOptions['$']
  private rows: FormatterOptions['rows']
  private defaultValue: FormatterOptions['defaultValue']
  private keyIndex: FormatterOptions['keyIndex']
  private valueIndex: FormatterOptions['valueIndex']
  public record: Record<string, string>

  constructor({
    $,
    rows,
    defaultValue = '',
    keyIndex,
    valueIndex,
  }: FormatterOptions) {
    this.$ = $
    this.rows = rows
    this.defaultValue = defaultValue
    this.keyIndex = keyIndex
    this.valueIndex = valueIndex
    this.record = {}

    this.traverse()
  }

  private traverse() {
    this.rows.forEach((row) => {
      const cols = this.$(row).find('td')
      const key = this.getKey(cols)
      const value = this.getValue(cols)

      if (key && value) {
        this.record[key] = value
      }
    })
  }

  private getKey(cols: Cheerio<Element>) {
    const originalKey = this.$(cols[this.keyIndex]).text()
    if (!originalKey || IGNORE_TEXT.includes(originalKey)) return ''
    const [key] = originalKey.split(' ')
    return IGNORE_TEXT.includes(key) ? '' : key
  }

  private getValue(cols: Cheerio<Element>) {
    const originalValue = this.$(cols[this.valueIndex]).text()
    if (!originalValue || IGNORE_TEXT.includes(originalValue)) return ''
    const pattern = new RegExp(' \\(.*\\)|\n', 'gim')
    const valueText = originalValue.replace(pattern, '')
    const [value] = valueText.split('、')
    return IGNORE_TEXT.includes(value) ? this.defaultValue : value
  }
}

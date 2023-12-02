import {
  camelCase,
  isObject,
  hasKey,
  pascalCase,
  kebabCase,
  capitalize,
} from '@bassist/utils'
import { debug } from './decorators.mts'
import type {
  CodingStyle,
  LanguageItem,
  LanguageMappingOptions,
} from './type.mts'

export class LanguageMapping {
  private data: LanguageMappingOptions['data']
  // @ts-ignore
  private displayName: LanguageMappingOptions['displayName']
  // @ts-ignore
  private debug: LanguageMappingOptions['debug']

  constructor({
    data,
    displayName = '',
    debug = false,
  }: LanguageMappingOptions) {
    this.data = data
    this.displayName = displayName
    this.debug = debug
  }

  @debug
  isValidCode(code: string) {
    return hasKey(this.data, code)
  }

  @debug
  getName(code: string, codingStyle?: CodingStyle) {
    if (!this.isValidCode(code)) return ''
    const codeName = this.data[code]
    switch (codingStyle) {
      case 'camelCase': {
        return camelCase(codeName)
      }
      case 'capitalize': {
        return capitalize(codeName)
      }
      case 'kebabCase': {
        return kebabCase(codeName)
      }
      case 'pascalCase': {
        return pascalCase(codeName)
      }
      default: {
        return codeName
      }
    }
  }

  @debug
  getCode(name: string) {
    for (const code in this.data) {
      if (hasKey(this.data, code)) {
        if (name === this.data[code]) {
          return code
        }
      }
    }
    return ''
  }

  @debug
  getLanguages() {
    if (!isObject(this.data)) return []
    return Object.keys(this.data).map((key) => {
      const item: LanguageItem = {
        code: key,
        name: this.data[key],
      }
      return item
    })
  }
}

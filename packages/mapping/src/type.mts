export type LanguageData = Record<string, string>

export interface LanguageMappingOptions {
  /**
   * Language code JSON data from `@iso-639/data` .
   *
   * @see https://github.com/ISO-639/language-code/tree/main/packages/data
   */
  data: LanguageData

  /**
   * The displayName string is used in debugging messages.
   * Usually, you don’t need to set it explicitly
   * because it has default value named `LanguageMapping`.
   * You might want to set it explicitly if you want to
   * display a different name for debugging purposes.
   *
   * @default ''
   */
  displayName?: string

  /**
   * When an error occurs in the program,
   * an error log will be output on the console.
   *
   * @default false
   */
  debug?: boolean
}

export interface LanguageItem {
  code: string
  name: string
}

export type CodingStyle =
  | 'camelCase'
  | 'capitalize'
  | 'kebabCase'
  | 'pascalCase'

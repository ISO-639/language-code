# @iso-639/mapping

<p>
  <a href='https://www.npmjs.com/package/@iso-639/mapping'>
    <img src="https://img.shields.io/npm/v/@iso-639/mapping?color=f43f5e&label=npm" />
  </a>
  <a href="https://www.npmjs.com/package/@iso-639/mapping" target="__blank">
    <img src="https://img.shields.io/npm/dt/@iso-639/mapping?color=f43f5e&label=downloads" />
  </a>
  <a href="https://github.com/ISO-639/language-code" target="__blank">
    <img alt="GitHub stars" src="https://img.shields.io/github/stars/ISO-639/language-code?style=social" />
  </a>
</p>

ISO 639 language code mapping toolkit, which can easily help you manage language data.

## Usage

With npm(or yarn, or pnpm):

```bash
npm install @iso-639/data @iso-639/mapping
```

Yes, it is recommended to also install the `@iso-639/data` ISO 639 data package, which contains the code data for multi-language versions of `ISO 639-1` and `ISO 639-2`. Of course, you can also obtain this data by requesting a CDN, see the instructions of [@iso-639/data](https://github.com/ISO-639/language-code/tree/main/packages/data) for details.

In `.js` / `.ts` or other files:

```ts
// ISO 639-1 is stored in the `1` directory
import ISO_639_1_EN from '@iso-639/data/1/en.json'

// ISO 639-2 is stored in the `2` directory
import ISO_639_2_EN from '@iso-639/data/2/en.json'

// Exported a class
import { LanguageMapping } from '@iso-639/mapping'

const en1 = new LanguageMapping({
  data: ISO_639_1_EN,
  displayName: 'ISO_639_1_EN', // Optional
  debug: true, // Optional
})

const en2 = new LanguageMapping({
  data: ISO_639_2_EN,
  displayName: 'ISO_639_2_EN', // Optional
  debug: true, // Optional
})
```

## Type declarations

Core class type:

```ts
declare class LanguageMapping {
  private data
  private displayName
  private debug
  constructor({ data, displayName, debug }: LanguageMappingOptions)
  isValidCode(code: string): boolean
  getName(code: string, codingStyle?: CodingStyle): string
  getCode(name: string): string
  getLanguages(): LanguageItem[]
}
```

Other auxiliary types:

```ts
type LanguageData = Record<string, string>

interface LanguageMappingOptions {
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

interface LanguageItem {
  code: string
  name: string
}

type CodingStyle = 'camelCase' | 'capitalize' | 'kebabCase' | 'pascalCase'
```

## Release Notes

Please refer to [CHANGELOG](https://github.com/ISO-639/language-code/tree/main/packages/mapping/CHANGELOG.md) for details.

## License

MIT License © 2023-PRESENT [chengpeiquan](https://github.com/chengpeiquan)

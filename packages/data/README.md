# @iso-639/data

<p>
  <a href='https://www.npmjs.com/package/@iso-639/data'>
    <img src="https://img.shields.io/npm/v/@iso-639/data?color=f43f5e&label=npm" />
  </a>
  <a href="https://www.npmjs.com/package/@iso-639/data" target="__blank">
    <img src="https://img.shields.io/npm/dt/@iso-639/data?color=f43f5e&label=downloads" />
  </a>
  <a href="https://github.com/ISO-639/mapping" target="__blank">
    <img alt="GitHub stars" src="https://img.shields.io/github/stars/ISO-639/mapping?style=social" />
  </a>
</p>

Contains code lists for ISO 639-1 and ISO 639-2 as well as multi-language support.

## Friendly Reminder

We provided [@iso-639/mapping](https://www.npmjs.com/package/@iso-639/mapping) mapping toolkit, which can easily help you manage language data.

## Usage

With npm(or yarn, or pnpm):

```bash
npm install @iso-639/data
```

In `.js` / `.ts` or other files:

```ts
// ISO 639-1 is stored in the `1` directory
import ISO_639_1_EN from '@iso-639/data/1/en.json'
import ISO_639_1_ZH_CN from '@iso-639/data/1/zh-CN.json'

// ISO 639-2 is stored in the `2` directory
import ISO_639_2_EN from '@iso-639/data/2/en.json'
import ISO_639_2_ZH_CN from '@iso-639/data/2/zh-CN.json'
```

With CDN:

```html
<script>
  const res = await fetch('https://cdn.jsdelivr.net/npm/@iso-639/data/1/en.json')
  const json = await res.json()
</script>
```

## Multi-language Support

JSON files named with language codes in the source code directory are supported languages.

See: [Source Code](https://github.com/ISO-639/mapping/tree/main/packages/data)

## Release Notes

Please refer to [CHANGELOG](https://github.com/ISO-639/mapping/tree/main/packages/data/CHANGELOG.md) for details.

## License

MIT License © 2023-PRESENT [chengpeiquan](https://github.com/chengpeiquan)

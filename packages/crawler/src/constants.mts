export const VERSIONS = [1, 2] as const

export interface IndexOptions {
  keyIndex: number
  valueIndex: number
}

interface LanguageOption {
  url: `https://${string}`
  defaultValue: string
  v1: IndexOptions
  v2: IndexOptions
}

export const LANGUAGES_CONFIG: Record<string, LanguageOption> = {
  en: {
    url: 'https://zh.wikipedia.org/zh-cn/ISO_639-2代码列表',
    defaultValue: 'Unknown',
    v1: { keyIndex: 1, valueIndex: 3 },
    v2: { keyIndex: 0, valueIndex: 3 },
  },

  ja: {
    url: 'https://ja.wikipedia.org/wiki/ISO_639-2コード一覧',
    defaultValue: '未知',
    v1: { keyIndex: 2, valueIndex: 3 },
    v2: { keyIndex: 0, valueIndex: 3 },
  },

  zh: {
    url: 'https://zh.wikipedia.org/zh-cn/ISO_639-2代码列表',
    defaultValue: '未知',
    v1: { keyIndex: 1, valueIndex: 4 },
    v2: { keyIndex: 0, valueIndex: 4 },
  },

  'zh-CN': {
    url: 'https://zh.wikipedia.org/zh-cn/ISO_639-2代码列表',
    defaultValue: '未知',
    v1: { keyIndex: 1, valueIndex: 4 },
    v2: { keyIndex: 0, valueIndex: 4 },
  },

  'zh-HK': {
    url: 'https://zh.wikipedia.org/zh-hk/ISO_639-2代码列表',
    defaultValue: '未知',
    v1: { keyIndex: 1, valueIndex: 4 },
    v2: { keyIndex: 0, valueIndex: 4 },
  },

  'zh-MO': {
    url: 'https://zh.wikipedia.org/zh-mo/ISO_639-2代码列表',
    defaultValue: '未知',
    v1: { keyIndex: 1, valueIndex: 4 },
    v2: { keyIndex: 0, valueIndex: 4 },
  },

  'zh-MY': {
    url: 'https://zh.wikipedia.org/zh-my/ISO_639-2代码列表',
    defaultValue: '未知',
    v1: { keyIndex: 1, valueIndex: 4 },
    v2: { keyIndex: 0, valueIndex: 4 },
  },

  'zh-SG': {
    url: 'https://zh.wikipedia.org/zh-sg/ISO_639-2代码列表',
    defaultValue: '未知',
    v1: { keyIndex: 1, valueIndex: 4 },
    v2: { keyIndex: 0, valueIndex: 4 },
  },

  'zh-TW': {
    url: 'https://zh.wikipedia.org/zh-tw/ISO_639-2代码列表',
    defaultValue: '未知',
    v1: { keyIndex: 1, valueIndex: 4 },
    v2: { keyIndex: 0, valueIndex: 4 },
  },
}

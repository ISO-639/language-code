export const WEBSITE_HOST = 'lang.js.org'
export const WEBSITE_ORIGIN = `https://${WEBSITE_HOST}`
export const WEBSITE_TITLE = 'Language Code'
export const WEBSITE_DESCRIPTION =
  'Contains code lists for ISO 639-1 and ISO 639-2 as well as multi-language support.'

export interface FeatureProps {
  icon: string
  title: string
  description: string
}

export const FEATURE_ITEMS: FeatureProps[] = [
  {
    icon: '📚',
    title: 'Reliable',
    description: 'Multilingual data from Wikipedia powered.',
  },
  {
    icon: '☁',
    title: 'CDN Available',
    description: 'Global CDN support, Powered by jsDelivr, UNPKG and so on.',
  },
  {
    icon: '🛠',
    title: 'Expandable',
    description: 'Ready-made data structure transformation logic.',
  },
]

export const WEBSITE_HOST = 'lang.js.org'
export const WEBSITE_ORIGIN = `https://${WEBSITE_HOST}`
export const WEBSITE_TITLE = 'Language Code'
export const WEBSITE_DESCRIPTION =
  'Contains code lists for ISO 639-1 and ISO 639-2 as well as multi-language support.'

export interface BaseFeatureProps {
  image: string
  title: string
  description: string
  link: string
}

export const FEATURE_ITEMS: BaseFeatureProps[] = [
  {
    image: '/assets/img/feature-standard.jpg',
    title: 'Standard',
    description:
      'Internationally recognized code for the representation of more than 500 languages or language families, with ISO 639.',
    link: 'https://www.iso.org/iso-639-language-code',
  },
  {
    image: '/assets/img/feature-wikipedia.jpg',
    title: 'Reliable',
    description:
      'Multilingual data from Wikipedia powered, includes translations in different languages.',
    link: 'https://en.wikipedia.org/wiki/ISO_639',
  },
  {
    image: '/assets/img/feature-json.jpg',
    title: 'Generic',
    description:
      'Provide generic (JSON) resource objects, suitable for different development languages.',
    link: '/data',
  },
  {
    image: '/assets/img/feature-cdn.jpg',
    title: 'CDN Available',
    description:
      'Out-of-the-box global CDN support, powered by jsDelivr, UNPKG, and more.',
    link: 'https://www.jsdelivr.com/package/npm/@iso-639/data',
  },
  {
    image: '/assets/img/feature-mapping.jpg',
    title: 'Expandable',
    description: 'Ready-made data structure transformation logic.',
    link: '/mapping',
  },
]

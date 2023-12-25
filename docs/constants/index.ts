export const WEBSITE_TITLE = 'Language Code'

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

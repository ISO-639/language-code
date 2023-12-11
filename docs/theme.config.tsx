import React from 'react'
import { WEBSITE_TITLE } from './constants'

export default {
  logo: (
    <div className="flex items-center gap-3">
      <img
        className="flex flex-shrink-0 w-6 rounded"
        src="/assets/logo.png"
        alt={WEBSITE_TITLE}
      />
      <span>{WEBSITE_TITLE}</span>
    </div>
  ),
  project: {
    link: 'https://github.com/ISO-639/language-code',
  },
  // ... other theme options
}

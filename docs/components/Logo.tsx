import React from 'react'
import { WEBSITE_TITLE } from '../constants'

export const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-3">
      <img
        className="flex flex-shrink-0 w-6 rounded"
        src="/assets/logo.png"
        alt={WEBSITE_TITLE}
      />
      <span className="luster">{WEBSITE_TITLE}</span>
    </div>
  )
}

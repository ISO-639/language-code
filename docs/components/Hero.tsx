import React from 'react'
import { WEBSITE_TITLE } from '../constants'

export const Hero: React.FC = () => {
  return (
    <div className="w-full text-center my-40">
      <h2 className="font-bold headline">{WEBSITE_TITLE}</h2>
    </div>
  )
}

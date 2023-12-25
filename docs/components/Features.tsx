import React from 'react'
import { FEATURE_ITEMS, type FeatureProps } from '../constants'

export const Feature: React.FC<FeatureProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="bg-neutral-100 dark:bg-neutral-800 rounded-xl p-6 select-none">
      <div className="flex items-center mb-2">
        <div className="flex justify-center items-center bg-neutral-200 dark:bg-neutral-900 w-12 h-12 text-xl rounded-lg">
          {icon}
        </div>

        <h2 className="text-black dark:text-white font-bold text-lg ml-4">
          {title}
        </h2>
      </div>

      <p className="text-gray-500 dark:text-gray-400 text-sm">{description}</p>
    </div>
  )
}

export const Features: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full lg:max-w-screen-lg mx-auto my-4 lg:my-12">
      {FEATURE_ITEMS.map((i, idx) => (
        <Feature key={i.title + idx} {...i} />
      ))}
    </div>
  )
}

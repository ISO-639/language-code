import React, { type SVGProps } from 'react'
import clsx from 'clsx'
import { FEATURE_ITEMS, type BaseFeatureProps } from '../constants'
import { Link } from 'nextra-theme-docs'

export const OpenNewWindowIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
      >
        <path strokeLinejoin="round" d="M21 3h-6m6 0l-9 9m9-9v6"></path>
        <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"></path>
      </g>
    </svg>
  )
}

interface FeatureProps extends BaseFeatureProps {
  index: number
}

export const Feature: React.FC<FeatureProps> = ({
  index,
  image,
  title,
  description,
  link,
}) => {
  const wrapperCls = clsx(
    'flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-24 w-full',
    {
      'lg:flex-row-reverse': index % 2 === 0,
    },
  )

  const shadowCls = clsx(
    'absolute -left-6 -bottom-6 w-full h-full rounded-xl shadow-xl blur-md',
    'bg-gray-600 opacity-20',
    'dark:bg-black dark:opacity-30',
  )

  return (
    <div className={wrapperCls}>
      <div className="relative w-[320px] lg:w-[400px] h-[256px] lg:h-[320px]">
        <div className={shadowCls}></div>

        <div className="absolute top-0 left-0 w-full h-full z-1 rounded-xl overflow-hidden">
          <img
            className="w-full h-full select-none pointer-events-none"
            src={image}
            alt={title}
          />
        </div>
      </div>

      <div className="flex flex-col flex-1 items-center lg:items-start gap-6 overflow-hidden">
        <h3 className="text-black dark:text-white font-bold text-3xl lg:text-5xl">
          {title}
        </h3>

        <p className="text-gray-500 dark:text-gray-400 text-base lg:text-xl text-center lg:text-left max-w-80 lg:max-w-full">
          {description}
        </p>

        <div className="flex">
          <Link
            className="flex items-center gap-2 !no-underline lg:hover:opacity-70 transition-opacity"
            href={link}
          >
            <OpenNewWindowIcon />
            <span>Learn More</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export const Features: React.FC = () => {
  return (
    <div className="flex flex-col gap-24 lg:gap-36 w-full lg:max-w-screen-lg mx-auto my-4 lg:my-48">
      {FEATURE_ITEMS.map((i, idx) => (
        <Feature key={i.title + idx} index={idx} {...i} />
      ))}
    </div>
  )
}

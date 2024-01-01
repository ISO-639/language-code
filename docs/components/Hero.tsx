import React, { useEffect, useState } from 'react'
import clsx from 'clsx'
import { WEBSITE_TITLE } from '../constants'
import { Link } from 'nextra-theme-docs'
import { useAppearance } from '../hooks/data-hooks'

export const Hero: React.FC = () => {
  const { isDark } = useAppearance()

  const [apertureVisible, setApertureVisible] = useState(false)

  useEffect(() => {
    setApertureVisible(isDark)
  }, [isDark])

  const btnCls = clsx(
    'flex flex-shrink-0 items-center justify-center',
    'rounded-lg max-w-full h-12 px-6',
    '!text-white dark:!text-black font-bold',
    'bg-slate-900 hover:bg-slate-700',
    'dark:bg-zinc-100 dark:highlight-white/20 dark:hover:bg-zinc-200',
    'focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 ',
    'cursor-pointer !no-underline',
  )

  return (
    <div className="flex flex-col items-center gap-20 w-full text-center my-40">
      <div className="flex flex-col luster">
        <h3 className="headline !text-4xl">ISO 639</h3>
        <h2 className="font-bold headline">{WEBSITE_TITLE}</h2>
      </div>

      {apertureVisible && <div className="aperture" />}

      <Link className={btnCls} href="/getting-started">
        <span>Get Started</span>
      </Link>
    </div>
  )
}

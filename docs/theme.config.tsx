import React from 'react'
import { useRouter } from 'next/router'
import { WEBSITE_TITLE } from './constants'
import { Logo } from './components/Logo'
import { Copyright } from './components/Copyright'

export default {
  logo: <Logo />,
  primaryHue: 20,
  gitTimestamp: () => null,
  footer: {
    text: <Copyright />,
  },
  useNextSeoProps() {
    const { asPath } = useRouter()
    return {
      titleTemplate: asPath === '/' ? WEBSITE_TITLE : `%s – ${WEBSITE_TITLE}`,
    }
  },
  project: {
    link: 'https://github.com/ISO-639/language-code',
  },
}

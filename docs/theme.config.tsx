import React from 'react'
import { useRouter } from 'next/router'
import { WEBSITE_TITLE } from './constants'
import { Logo } from './components/Logo'
import { Copyright } from './components/Copyright'
import { useHead } from './hooks/data-hooks'

export default {
  logo: <Logo />,
  primarySaturation: 0,
  gitTimestamp: () => null,
  head: useHead,
  footer: {
    text: <Copyright />,
  },
  editLink: {
    component: null,
  },
  feedback: {
    content: null,
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

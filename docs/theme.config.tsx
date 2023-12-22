import React from 'react'
import { Logo } from './components/Logo'
import { Copyright } from './components/Copyright'

export default {
  logo: <Logo />,
  primaryHue: 10,
  gitTimestamp: false,
  footer: {
    text: <Copyright />,
  },
  project: {
    link: 'https://github.com/ISO-639/language-code',
  },
}
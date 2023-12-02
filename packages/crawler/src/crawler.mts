import axiosStatic from 'axios'
import { load } from 'cheerio'
import { randomUserAgent } from '@bassist/utils'

const axios = axiosStatic.create({
  headers: {
    'user-agent': randomUserAgent(),
  },
  proxy: {
    host: '127.0.0.1',
    port: 7890,
    protocol: 'http',
  },
})

export class Crawler {
  private resourceUrl: string

  constructor(resourceUrl: string) {
    this.resourceUrl = resourceUrl
  }

  async run() {
    const res = await axios.get(this.resourceUrl)
    const $ = load(res.data)
    const rows = [...$('table.sortable tbody').find('tr')].slice(1)

    return {
      $,
      rows,
    }
  }
}

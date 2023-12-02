import { describe, expect, it } from 'vitest'
import { LanguageMapping } from '..'

const noop = () => console.log('')

const data = {
  aar: 'Afar',
  aav: 'Austro-Asiatic languages',
  abk: 'Abkhazian',
  ace: 'Achinese',
  alg: 'Algonquian languages',
  alt: 'Southern Altai',
  alv: 'Atlantic-Congo languages',
  amh: 'Amharic',
  ang: 'Old English',
}

const mapping = new LanguageMapping({
  data,
  displayName: 'Normal Mode',
  debug: true,
})

describe('LanguageMapping', () => {
  // Need to cancel the fault-tolerant code in the source code to trigger
  // it('debug', () => {
  //   const mapping = new LanguageMapping({
  //     // @ts-ignore
  //     data: null,
  //     displayName: 'Debug Mode',
  //     debug: true,
  //   })

  //   expect(mapping.getLanguages()).toEqual([])
  // })

  it('getLanguages', () => {
    expect(mapping.getLanguages()).toEqual([
      { code: 'aar', name: 'Afar' },
      { code: 'aav', name: 'Austro-Asiatic languages' },
      { code: 'abk', name: 'Abkhazian' },
      { code: 'ace', name: 'Achinese' },
      { code: 'alg', name: 'Algonquian languages' },
      { code: 'alt', name: 'Southern Altai' },
      { code: 'alv', name: 'Atlantic-Congo languages' },
      { code: 'amh', name: 'Amharic' },
      { code: 'ang', name: 'Old English' },
    ])
  })

  it('isValidCode', () => {
    expect(mapping.isValidCode('aar')).toBeTruthy()
    expect(mapping.isValidCode('aav')).toBeTruthy()
    expect(mapping.isValidCode('aaaaa')).toBeFalsy()
    expect(mapping.isValidCode('')).toBeFalsy()
    // @ts-ignore
    expect(mapping.isValidCode(0)).toBeFalsy()
    // @ts-ignore
    expect(mapping.isValidCode(null)).toBeFalsy()
    // @ts-ignore
    expect(mapping.isValidCode(undefined)).toBeFalsy()
    // @ts-ignore
    expect(mapping.isValidCode(noop())).toBeFalsy()
  })

  it('getCode', () => {
    expect(mapping.getCode('Afar')).toBe('aar')
    expect(mapping.getCode('Austro-Asiatic languages')).toBe('aav')
    expect(mapping.getCode('Algonquian languages')).toBe('alg')
    expect(mapping.getCode('Atlantic-Congo languages')).toBe('alv')
  })

  it('getName', () => {
    expect(mapping.getName('aar')).toBe('Afar')
    expect(mapping.getName('aav')).toBe('Austro-Asiatic languages')
    expect(mapping.getName('alg')).toBe('Algonquian languages')
    expect(mapping.getName('alv')).toBe('Atlantic-Congo languages')
  })

  it('getName camelCase', () => {
    const codingStyle = 'camelCase'
    expect(mapping.getName('aar', codingStyle)).toBe('afar')
    expect(mapping.getName('aav', codingStyle)).toBe('austroAsiatic languages')
    expect(mapping.getName('alg', codingStyle)).toBe('algonquian languages')
    expect(mapping.getName('alv', codingStyle)).toBe('atlanticCongo languages')
    // @ts-ignore
    expect(mapping.getName(0, codingStyle)).toBe('')
    // @ts-ignore
    expect(mapping.getName(null, codingStyle)).toBe('')
    // @ts-ignore
    expect(mapping.getName(undefined, codingStyle)).toBe('')
    // @ts-ignore
    expect(mapping.getName(noop(), codingStyle)).toBe('')
  })

  it('getName capitalize', () => {
    const codingStyle = 'capitalize'
    expect(mapping.getName('aar', codingStyle)).toBe('Afar')
    expect(mapping.getName('aav', codingStyle)).toBe('Austro-Asiatic languages')
    expect(mapping.getName('alg', codingStyle)).toBe('Algonquian languages')
    expect(mapping.getName('alv', codingStyle)).toBe('Atlantic-Congo languages')
    // @ts-ignore
    expect(mapping.getName(0, codingStyle)).toBe('')
    // @ts-ignore
    expect(mapping.getName(null, codingStyle)).toBe('')
    // @ts-ignore
    expect(mapping.getName(undefined, codingStyle)).toBe('')
    // @ts-ignore
    expect(mapping.getName(noop(), codingStyle)).toBe('')
  })

  it('getName kebabCase', () => {
    const codingStyle = 'kebabCase'
    expect(mapping.getName('aar', codingStyle)).toBe('afar')
    expect(mapping.getName('aav', codingStyle)).toBe(
      'austro--asiatic-languages',
    )
    expect(mapping.getName('alg', codingStyle)).toBe('algonquian-languages')
    expect(mapping.getName('alv', codingStyle)).toBe(
      'atlantic--congo-languages',
    )
    // @ts-ignore
    expect(mapping.getName(0, codingStyle)).toBe('')
    // @ts-ignore
    expect(mapping.getName(null, codingStyle)).toBe('')
    // @ts-ignore
    expect(mapping.getName(undefined, codingStyle)).toBe('')
    // @ts-ignore
    expect(mapping.getName(noop(), codingStyle)).toBe('')
  })

  it('getName pascalCase', () => {
    const codingStyle = 'pascalCase'
    expect(mapping.getName('aar', codingStyle)).toBe('Afar')
    expect(mapping.getName('aav', codingStyle)).toBe('AustroAsiatic languages')
    expect(mapping.getName('alg', codingStyle)).toBe('Algonquian languages')
    expect(mapping.getName('alv', codingStyle)).toBe('AtlanticCongo languages')
    // @ts-ignore
    expect(mapping.getName(0, codingStyle)).toBe('')
    // @ts-ignore
    expect(mapping.getName(null, codingStyle)).toBe('')
    // @ts-ignore
    expect(mapping.getName(undefined, codingStyle)).toBe('')
    // @ts-ignore
    expect(mapping.getName(noop(), codingStyle)).toBe('')
  })
})

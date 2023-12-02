import minimist from '@withtypes/minimist'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

export function getArgv() {
  const argv = minimist(process.argv.slice(2), { string: ['_'] })
  const { _, otp, tag } = argv
  const [name] = _

  if (!name) {
    const errArgs = [
      '',
      '🚧 Missing package name to generate declaration files.',
      '',
      '💡 Related command arguments and options:',
      '   pnpm build <package-name>',
      '   pnpm release <package-name> [--otp] [--tag]',
      '',
      '',
    ]
    const errMsg = errArgs.join('\n')
    throw new Error(errMsg)
  }

  return { name, otp, tag }
}

export function parsePackage(path: string): { [key: string]: any } {
  try {
    const pkgPath = path.endsWith('package.json')
      ? resolve(path)
      : resolve(path, 'package.json')
    const pkgStringify = readFileSync(pkgPath, 'utf-8')
    const pkg = JSON.parse(pkgStringify)
    return pkg
  } catch (e) {
    return {}
  }
}

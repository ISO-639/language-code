import { execSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'
import { getArgv, parsePackage } from './utils.mts'

async function run() {
  const { name } = getArgv()
  const __dirname = dirname(fileURLToPath(import.meta.url))
  const pkgPath = resolve(__dirname, `../packages/${name}`)
  const pkg = parsePackage(pkgPath)

  const notes = [
    `Please refer to`,
    `[CHANGELOG](https://github.com/ISO-639/language-code/blob/main/packages/${name}/CHANGELOG.md)`,
    `for details.`,
  ].join(' ')

  const tagName = `${name}@${pkg.version}`
  const releaseArgs = [
    `git tag -a ${tagName} -m "${tagName}"`,
    `git push origin ${tagName}`,
    `gh release create ${tagName} --title "${tagName}" --notes "${notes}"`,
  ]

  const cmd = releaseArgs.join(' && ')
  execSync(cmd)
}
run().catch((e) => {
  console.log(e)
})

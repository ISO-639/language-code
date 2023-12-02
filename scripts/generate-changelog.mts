import { execSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'
import { getArgv } from './utils.mts'

async function run() {
  const { name } = getArgv()
  const __dirname = dirname(fileURLToPath(import.meta.url))
  const pkgPath = resolve(__dirname, `../packages/${name}`)

  const changelogArgs = [
    `conventional-changelog`,
    `--lerna-package ${name}`,
    `-p angular`,
    `-i CHANGELOG.md`,
    `-s`,
    `--commit-path=.`,
  ]

  const commands = [`cd ${pkgPath}`, changelogArgs.join(' ')]
  const cmd = commands.join(' && ')
  execSync(cmd)
}
run().catch((e) => {
  console.log(e)
})

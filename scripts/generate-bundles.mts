import { execSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'
import { readdirSync } from 'node:fs'
import { getArgv } from './utils.mts'

async function run() {
  const { name } = getArgv()
  const __dirname = dirname(fileURLToPath(import.meta.url))
  const pkgPath = resolve(__dirname, `../packages/${name}`)
  const files = readdirSync(pkgPath)
  if (!files.includes('tsup.config.mts')) return
  execSync(`pnpm -F ${name} build`)
}
run().catch((e) => {
  console.log(e)
})

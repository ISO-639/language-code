import { execSync } from 'child_process'
import { getArgv } from './utils.mts'

async function run() {
  const { name, otp, tag } = getArgv()

  // const publishArgs = [
  //   `pnpm publish`,
  //   `-F ${name}`,
  //   `--no-git-checks`,
  //   `--access public`,
  //   `${tag ? `--tag ${tag}` : ''}`,
  //   `--otp ${otp}`,
  // ]

  // // const commands = [
  // //   `pnpm mirror:rm`,
  // //   `pnpm build ${name}`,
  // //   publishArgs.join(' '),
  // //   `pnpm mirror:set`,
  // // ]
  // // const cmd = commands.join(' && ')
  // // execSync(cmd)

  // const notes = `Please refer to [CHANGELOG](https://github.com/remanufacturing/react-truncate/blob/main/CHANGELOG.md) for details.`

  // const releaseArgs = [
  //   `git tag -a v${version} -m "v${version}"`,
  //   `git push origin v${version}`,
  //   `gh release create v${version} --title "v${version}" --notes "${notes}"`,
  // ]

  // const cmd = releaseArgs.join(' && ')
  // execSync(cmd)
}
run().catch((e) => {
  console.log(e)
})

import * as fs from 'fs'
import * as path from 'path'
import { execSync } from 'child_process'
const dir = 'top/top-front'
const cmd = `
cd top
cd top-front
npm run ts-node ../../src/createEnvScripts/CreateDistSrcBuild.ts
`

const src = 'src'
const modulePath = path.resolve(dir, src)

const stdout = execSync(cmd)
console.log(stdout.toString())
it('cd -> mkdris ', () => {
    expect(fs.existsSync(modulePath)).toEqual(true)
})

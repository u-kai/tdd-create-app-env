import * as fs from 'fs'
import * as path from 'path'
import { execSync } from 'child_process'
const dir = 'top'
const cmd = `
cd top
ls
`

const node = 'node_modules'
const modulePath = path.resolve(dir, node)

const stdout = execSync(cmd)
console.log(stdout.toString())
it('cd -> npm install ', () => {
    expect(fs.existsSync(modulePath)).toEqual(true)
})

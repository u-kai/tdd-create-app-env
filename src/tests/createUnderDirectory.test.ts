import { CreateUnderDirectory } from '../createEnvScripts/CreateUnderDirectory'
import { CreateTopDirectory } from '../createEnvScripts/CreateTopDirectory'
import * as path from 'path'
import * as fs from 'fs'

const topPath = path.resolve('top')
const createTopDirectory = new CreateTopDirectory(topPath)
createTopDirectory.mkdir()
const createFrontDirectory = new CreateUnderDirectory(topPath, 'top-front')
const createBackDirectory = new CreateUnderDirectory(topPath, 'top-back')
createFrontDirectory.mkdir()
createBackDirectory.mkdir()

it('front is exist?', () => {
    const frontPath = path.resolve('top', `top-front`)
    const backPath = path.resolve('top', `top-back`)
    expect(fs.existsSync(frontPath)).toEqual(true)
    expect(fs.existsSync(backPath)).toEqual(true)
})

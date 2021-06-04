import { CreateTopDirectory } from '../createEnvScripts/CreateTopDirectory'
import * as path from 'path'
import * as fs from 'fs'

const topDirectoryPath = path.resolve('top')
const createTopDirectory = new CreateTopDirectory(topDirectoryPath)
createTopDirectory.mkdir()

it('top is Exits', () => {
    expect(fs.existsSync(topDirectoryPath)).toEqual(true)
})

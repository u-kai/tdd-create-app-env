import * as fs from 'fs'
import { CreateTopTsConfig } from '../createEnvScripts/CreateTopTsConfig'
import * as path from 'path'

const purposeFilePath = path.resolve('src/tests/purposeFiles')
const topTsConfigPath = path.resolve('src/tests/testFiles')

const createTopTsConfig = new CreateTopTsConfig(topTsConfigPath)
createTopTsConfig.createFile()

const purposeJson = JSON.parse(fs.readFileSync(purposeFilePath, 'utf-8'))
const data = JSON.parse(fs.readFileSync(topTsConfigPath, 'utf-8'))
it('data to json? and equal?', () => {
    expect(purposeJson).toStrictEqual(data)
})

import { CompareJsonFileTest } from './model/CompareJsonFileTest'
import { CreateReactTsConfig } from '../createEnvScripts/CreateReactTSConfig'

const filePath = 'src/tests/testFiles'
const createReactTsConfig = new CreateReactTsConfig(filePath)
createReactTsConfig.createFile()

const purposeFileName = 'ts-config.json'
const testFileName = 'ts-config.json'

const compareJsonFileTest = new CompareJsonFileTest(purposeFileName, testFileName)
compareJsonFileTest.test()

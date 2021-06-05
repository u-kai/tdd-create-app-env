import { CompareJsonFileTest } from './model/CompareJsonFileTest'
import { CreateReactTSConfig } from '../createEnvScripts/CreateReactTSConfig'

const filePath = 'src/tests/testFiles/reactTs-config.json'
const createReactTsConfig = new CreateReactTSConfig(filePath)
createReactTsConfig.createFile()

const purposeFileName = 'reactTs-config.json'
const testFileName = 'reactTs-config.json'

const compareJsonFileTest = new CompareJsonFileTest(purposeFileName, testFileName)
compareJsonFileTest.test()

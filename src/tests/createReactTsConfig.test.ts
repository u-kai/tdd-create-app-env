import { CompareFileTest } from './model/CompareFileTest'
import { CreateReactTSConfig } from '../createEnvScripts/CreateReactTSConfig'

const filePath = 'src/tests/testFiles/reactTs-config.json'
const createReactTsConfig = new CreateReactTSConfig(filePath)
createReactTsConfig.createFile()

const purposeFileName = 'reactTs-config.json'
const testFileName = 'reactTs-config.json'

const compareFileTest = new CompareFileTest(purposeFileName, testFileName)
compareFileTest.test()

import { CompareFileTest } from '../model/CompareFileTest'

const purposeFileName = 'topTs-config.json'
const testFileName = 'ts-config.json'

const compareFileTest = new CompareFileTest(purposeFileName, testFileName)
compareFileTest.test()

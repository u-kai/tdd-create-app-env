import { CompareJsonFileTest } from '../model/CompareJsonFileTest'

const purposeFileName = 'topTs-config.json'
const testFileName = 'ts-config.json'

const compareJsonFileTest = new CompareJsonFileTest(purposeFileName, testFileName)
compareJsonFileTest.test()

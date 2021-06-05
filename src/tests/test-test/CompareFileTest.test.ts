import { CompareJsonFileTest } from '../model/CompareJsonFileTest'

const purposeFileName = 'topTs-config.json'
const testFileName = 'ts-config.json'

const CompareJsonFileTest = new CompareJsonFileTest(purposeFileName, testFileName)
CompareJsonFileTest.test()

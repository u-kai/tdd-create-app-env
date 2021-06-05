import { CompareJsonFile } from './CompareJsonFile'
import * as path from 'path'

export class CompareJsonFileTest {
    topPath: string
    purposeFilePath: string
    testFilePath: string
    constructor(purposeFileName: string, testFileName: string) {
        this.topPath = 'src/tests'
        this.purposeFilePath = path.resolve(this.topPath, 'purposeFiles', purposeFileName)
        this.testFilePath = path.resolve(this.topPath, 'testFiles', testFileName)
    }
    test = () => {
        const compareFile = this.factoryCompareFile()
        const test = compareFile.returnTest()
        const purpose = compareFile.returnPurpose()
        const isExist = compareFile.isTestFileExits()
        it(`is exists ${this.testFilePath} and is Equal data`, () => {
            expect(isExist).toEqual(true)
            expect(test).toStrictEqual(purpose)
        })
    }
    factoryCompareFile = () => {
        return new CompareJsonFile(this.purposeFilePath, this.testFilePath)
    }
}

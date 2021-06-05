import * as fs from 'fs'

export class CompareFile {
    private purposeFilePath: string
    private testFilePath: string

    constructor(purposeFilePath: string, testFilePath: string) {
        this.purposeFilePath = purposeFilePath
        this.testFilePath = testFilePath
    }
    isTestFileExits = () => {
        return fs.existsSync(this.testFilePath)
    }

    returnPurpose = () => {
        return JSON.parse(fs.readFileSync(this.purposeFilePath, 'utf-8'))
    }

    returnTest = () => {
        return JSON.parse(fs.readFileSync(this.testFilePath, 'utf-8'))
    }
    isEqual = () => {
        const purposeData = JSON.parse(fs.readFileSync(this.purposeFilePath, 'utf-8'))
        const testData = JSON.parse(fs.readFileSync(this.testFilePath, 'utf-8'))
        console.log('purpose', purposeData)
        console.log('testData', testData)
        return purposeData === testData
    }
}

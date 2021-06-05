import {CompareFileTest} from "../model/CompareFileTest"

const purposeFileName = "topTs-config.json"
const testFileName = "ts-config.json"

const compareFileTest = new CompareFileTest(purposeFileName,testFileName)
const isTestFileExits = compareFileTest.isTestFileExits()
const isEqual = compareFileTest.isEqual()
it("is exist and is equal data contents",()=>{
    expect(isTestFileExits).toEqual(true)
    expect(isEqual).toEqual(true)
})
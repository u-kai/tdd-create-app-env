import {CompareFileTest} from "../model/CompareFileTest"

const purposeFileName = "topTs-config.json"
const testFileName = "ts-config.json"

const compareFileTest = new CompareFileTest(purposeFileName,testFileName)
compareFileTest.test()
// const isTestFileExits = compareFileTest.isTestFileExits()
// const isEqual = compareFileTest.isEqual()
// const test = compareFileTest.returnTest()
// const purpose = compareFileTest.returnPurpose()
// it("is exist and is equal data contents",()=>{
//     expect(isTestFileExits).toEqual(true)
//     expect(test).toStrictEqual(purpose)
// })
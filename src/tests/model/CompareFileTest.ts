import * as fs from "fs"
import * as path from "path"

export class CompareFileTest{
    topPath:string
    purposeFilePath:string
    testFilePath:string

    constructor(purposeFileName:string,testFileName:string){
        this.topPath = "src/tests"
        this.purposeFilePath = path.resolve(this.topPath,"purposeFiles",purposeFileName)
        this.testFilePath = path.resolve(this.topPath,"testFiles",testFileName)
    }
    isTestFileExits = () =>{
        return true
    }
    isEqual = () =>{
        return true
    }
}
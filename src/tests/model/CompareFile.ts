import {CompareJsonFile} from "../model/CompareJsonFile"
import * as fs from "fs"
export class CompareFile extends CompareJsonFile{
    constructor(purposeFilePath:string,testFilePath:string){
        super(purposeFilePath,testFilePath)
    }
    returnPurpose = ():string => {
        return fs.readFileSync(this.purposeFilePath,"utf-8")
    }
    returnTest = ():string => {
        return fs.readFileSync(this.testFilePath,"utf-8")
    }
}
import { fstat } from "fs"
import {CompareJsonFile} from "../model/CompareJsonFile"
import * as fs from "fs"
export class CompareFile extends CompareJsonFile{
    constructor(purposeFilePath:string,testFilePath:string){
        super(purposeFilePath,testFilePath)
    }
    returnPurpose = () => {
        return fs.readFileSync(this.purposeFilePath,"utf-8")
    }
    returnTest = () => {
        return fs.readFileSync(this.testFilePath,"utf-8")
    }
}
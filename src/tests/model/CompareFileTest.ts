import {CompareFile} from "./CompareFile"
import {CompareJsonFileTest} from "./CompareJsonFileTest"

export class CompareFileTest extends CompareJsonFileTest{
    constructor(purposeFileName:string,testFileName:string){
        super(purposeFileName,testFileName)
    }
    factoryCompareFile = () => {
        return new CompareFile(this.purposeFilePath,this.testFilePath)
    }
}
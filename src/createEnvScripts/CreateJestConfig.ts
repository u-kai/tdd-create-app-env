import {FileMaker} from "model/FileMaker"

export class CreateJestConfig extends FileMaker{
    constructor(filePath:string){
        super(filePath,"")
        this.fileContents = `export default {
    clearMocks:true,
    collectCoverage:true,
    coverageDirectory:"coverage",
    preset:"ts-jest",
    moduleDirectories:["node_modules","src"]
}`
    }
}
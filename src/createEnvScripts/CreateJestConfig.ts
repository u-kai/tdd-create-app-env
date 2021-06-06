import {FileMaker} from "../model/FileMaker"
import * as path from "path"
export class CreateJestConfig extends FileMaker{
    constructor(filePath:string){
        super(filePath,"")
        this.filePath = path.resolve(filePath,"jest.config.ts")
        this.fileContents = `export default {
clearMocks:true,
collectCoverage:true,
coverageDirectory:"coverage",
preset:"ts-jest",
moduleDirectories:["node_modules","src"]
}`
    }
}
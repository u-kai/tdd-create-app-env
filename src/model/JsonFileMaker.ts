import {FileMaker} from "./FileMaker"
import {ObjectType} from "../types/ObjectsType"
import * as fs from "fs"

export class JsonFileMaker extends FileMaker{
    objectData:ObjectType
    constructor(filePath:string,objectData:ObjectType){
        super(filePath,"")
        this.objectData = objectData
    }
    writeFile = () => {
        fs.writeFileSync(this.filePath,JSON.stringify(this.objectData,null,"\t"))
    }
} 
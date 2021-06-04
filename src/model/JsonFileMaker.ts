import {FileMaker} from "./FileMaker"
import {ObjectType} from "../types/ObjectsType"
import * as fs from "fs"

export class JsonFileMaker extends FileMaker{
    objectData:ObjectType
    constructor(filePath:string,objectData:ObjectType){
        super(filePath,"")
        this.objectData = objectData
    }

    createClone = () => {
        let clone:ObjectType = {}
        Object.keys(this.objectData).map((key)=>{
            clone[key] = this.objectData[key]
        })
        return clone
    }
    writeFile = () => {
        fs.writeFileSync(this.filePath,JSON.stringify(this.objectData,null,"\t"))
    }
} 
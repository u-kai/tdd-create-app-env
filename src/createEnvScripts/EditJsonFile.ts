import * as fs from "fs"
import {ObjectType} from "../types/ObjectsType"
import {KeyValue} from "../types/KeyValue"
export class EditJsonFile{
    filePath:string
    private changeKey:string
    private changeData:KeyValue
    constructor(filePath:string,changeKey:string,changeData:KeyValue){
        this.filePath = filePath
        this.changeKey = changeKey
        this.changeData = changeData
    }
    readFile = () => {
        return JSON.parse(fs.readFileSync(this.filePath,"utf-8"))
    }

    edit = () => {
        let fileData:ObjectType = this.readFile()
        fileData[this.changeKey] = this.changeData
        fs.writeFileSync(this.filePath,JSON.stringify(fileData,null,"\t"))
    }
}
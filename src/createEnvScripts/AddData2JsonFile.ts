import { KeyValue } from "types/KeyValue"
import {EditJsonFile} from "./EditJsonFile"

export class AddData2JsonFile extends EditJsonFile{
    addDataKey:string
    addData:KeyValue
    constructor(filePath:string,addDataKey:string,addData:KeyValue){
        super(filePath,addDataKey,addData)
        this.addData = addData
        this.addDataKey = addDataKey
    }
}
import { JsonFileMaker } from '../model/JsonFileMaker'
import { ObjectType } from '../types/ObjectsType'
import * as path from "path"
export class CreateTopTsConfig {
    filePath: string
    fileData: ObjectType
    constructor(filePath: string) {
        this.filePath = path.resolve(filePath,"ts-config.json")
        this.fileData = {
            exclude: ['.'],
        }
    }
    createFile = ():void => {
        const witer = new JsonFileMaker(this.filePath, this.fileData)
        witer.writeFile()
    }
}

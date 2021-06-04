import { JsonFileMaker } from '../model/JsonFileMaker'
import { ObjectType } from '../types/ObjectsType'

export class CreateTopTsConfig {
    filePath: string
    fileData: ObjectType
    constructor(filePath: string) {
        this.filePath = filePath
        this.fileData = {
            exclude: ['.'],
        }
    }
    createFile = () => {
        const witer = new JsonFileMaker(this.filePath, this.fileData)
        witer.writeFile()
    }
}

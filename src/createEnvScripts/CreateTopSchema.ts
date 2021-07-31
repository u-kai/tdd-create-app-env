import { ObjectType } from '../types/ObjectsType'
import * as path from 'path'
import { JsonFileMaker } from '../model/JsonFileMaker'

export class CreateTopSchema {
    filePath: string
    fileData: ObjectType
    constructor(filePath: string) {
        this.filePath = path.resolve(filePath, 'schema.graphql')
        this.fileData = {}
    }
    createFile = (): void => {
        return new JsonFileMaker(this.filePath, this.fileData).writeFile()
    }
}

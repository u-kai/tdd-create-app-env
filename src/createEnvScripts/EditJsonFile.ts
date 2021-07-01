import * as fs from 'fs'
import { ObjectType } from '../types/ObjectsType'
import { KeyValue } from '../types/KeyValue'
export class EditJsonFile {
    filePath: string
    private changeKey: string
    private changeData: KeyValue
    constructor(filePath: string, changeKey: string, changeData: KeyValue) {
        this.filePath = filePath
        this.changeKey = changeKey
        this.changeData = changeData
    }
    readFile = (): ObjectType => {
        return JSON.parse(fs.readFileSync(this.filePath, 'utf-8'))
    }

    edit = (): void => {
        const fileData: ObjectType = this.readFile()
        fileData[this.changeKey] = this.changeData
        fs.writeFileSync(this.filePath, JSON.stringify(fileData, null, '\t'))
    }
    add = (): void => {
        const fileData: { [key: string]: KeyValue } = this.readFile() as { [key: string]: KeyValue }
        Object.keys(this.changeData).map((key) => (fileData[this.changeKey][key] = this.changeData[key]))
        fs.writeFileSync(this.filePath, JSON.stringify(fileData, null, '\t'))
    }
}

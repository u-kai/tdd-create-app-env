import * as fs from 'fs'

export class FileMaker {
    filePath: string
    fileContents: string
    constructor(filePath: string, fileContents: string) {
        this.filePath = filePath
        this.fileContents = fileContents
    }
    writeFile = () => {
        fs.writeFileSync(this.filePath, this.fileContents, 'utf-8')
    }
}

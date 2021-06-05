import * as fs from 'fs'

export class DirectoryMaker {
    private directoryName: string
    constructor(name: string) {
        this.directoryName = name
    }
    isExist = (): boolean => {
        return fs.existsSync(this.directoryName)
    }
    mkdir = ():void => {
        if (!this.isExist()) {
            fs.mkdirSync(this.directoryName)
        }
    }
}

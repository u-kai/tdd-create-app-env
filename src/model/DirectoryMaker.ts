import * as fs from 'fs'

export class DirectoryMaker {
    private directoryName: string
    constructor(name: string) {
        this.directoryName = name
    }
    isExist = (): boolean => {
        return fs.existsSync(this.directoryName)
    }
    mkdir = () => {
        if (!this.isExist()) {
            console.log('directoryMaker', this.directoryName)
            fs.mkdirSync(this.directoryName)
        }
    }
}

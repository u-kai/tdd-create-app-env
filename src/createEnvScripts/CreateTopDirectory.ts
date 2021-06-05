import { DirectoryMaker } from '../model/DirectoryMaker'

export class CreateTopDirectory {
    dirPath: string

    constructor(dirPath: string) {
        this.dirPath = dirPath
    }
    mkdir = ():void => {
        const directoryMaker = new DirectoryMaker(this.dirPath)
        directoryMaker.mkdir()
    }
}

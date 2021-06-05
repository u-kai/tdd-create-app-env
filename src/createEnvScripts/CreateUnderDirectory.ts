import * as path from 'path'
import { DirectoryMaker } from '../model/DirectoryMaker'

export class CreateUnderDirectory {
    underDirPath: string
    constructor(topDirPath: string, underDirNName: string) {
        this.underDirPath = path.resolve(topDirPath, underDirNName)
    }
    mkdir = ():void => {
        const directoryMaker = new DirectoryMaker(this.underDirPath)
        directoryMaker.mkdir()
    }
}

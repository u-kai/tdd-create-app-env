import {DirectoryMaker} from "../model/DirectoryMaker"
import * as path from "path"
export class CreateFrontDirectory{
    topDirPath:string
    dirPath:string

    constructor(topDirPath:string){
        this.topDirPath = topDirPath
        this.dirPath = this.convert()
    }
    getTopDirName = () => {
        const splitTopDirPath = this.topDirPath.split("/")
        return splitTopDirPath[splitTopDirPath.length-1]
    }
    convert = ():string => {
        return path.resolve(this.topDirPath,`${this.getTopDirName()}-front`)
    }
    mkdir = () => {
        const directoryMaker = new DirectoryMaker(this.dirPath)
        directoryMaker.mkdir()
    }
}
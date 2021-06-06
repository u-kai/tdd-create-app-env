import {DirectoryMaker} from "../model/DirectoryMaker"
import * as path from "path"
export class CreateDistSrcBuild{
    topPath:string
    makeDirectorys = ["src","build","dist"]
    constructor(topPath:string){
        this.topPath = topPath
    }
    mkdirs = ():void => {
        this.makeDirectorys.map((dirName)=>{
            const dirPath = path.resolve(this.topPath,dirName)
            const directoryMaker = new DirectoryMaker(dirPath)
            directoryMaker.mkdir()
        })
    }

}



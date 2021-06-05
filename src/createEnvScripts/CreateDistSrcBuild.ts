import {DirectoryMaker} from "model/DirectoryMaker"
import * as path from "path"
export class CreateDistSrcBuild{
    private topPath:string
    private makeDirectorys = ["src","build","dist"]
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


// const makeDirectorys = ["src","build","dist"]
// export const createDistSrcBuild = () => {
//     makeDirectorys.map((directory)=>{
//         const directoryMaker = new DirectoryMaker(directory)
//         directoryMaker.mkdir()
//     })
// }
// createDistSrcBuild()

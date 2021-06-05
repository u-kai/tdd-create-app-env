import {DirectoryMaker} from "model/DirectoryMaker"

const makeDirectorys = ["src","build","dist"]
export const createDistSrcBuild = () => {
    makeDirectorys.map((directory)=>{
        const directoryMaker = new DirectoryMaker(directory)
        directoryMaker.mkdir()
    })
}
createDistSrcBuild()

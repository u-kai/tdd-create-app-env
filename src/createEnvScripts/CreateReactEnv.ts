import {DirectoryMaker} from "model/DirectoryMaker"
export class CreateReactEnv{
    private topPath:string
    constructor(topPath:string){
        this.topPath = topPath
    }
    topDirCreate = ():void => {
        const mkdir = new DirectoryMaker(this.topPath)
        mkdir.mkdir()
    }
    run = ():void =>{
        this.topDirCreate()
    }
}
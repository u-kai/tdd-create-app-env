import {DirectoryMaker} from "model/DirectoryMaker"
import {exeCommand} from "functions/ExeCommand"
import {CreateDistSrcBuild} from "createEnvScripts/CreateDistSrcBuild"
export class CreateReactEnv{
    private topPath:string
    constructor(topPath:string){
        this.topPath = topPath
    }
    topDirCreate = ():void => {
        const mkdir = new DirectoryMaker(this.topPath)
        mkdir.mkdir()
    }
    yarnInit = ():void => {
        const cmd = `cd ${this.topPath}
        yarn init -y`
        exeCommand(cmd)
    }
    createChilderns = () => {
        const createDistSrcBuild = new CreateDistSrcBuild(this.topPath)
        createDistSrcBuild.mkdirs()
    }
    run = ():void =>{
        this.topDirCreate()
        this.yarnInit()
        this.createChilderns()
    }
}
import {DirectoryMaker} from "model/DirectoryMaker"
import {exeCommand} from "functions/ExeCommand"
import {CreateDistSrcBuild} from "createEnvScripts/CreateDistSrcBuild"
import {CreateReactTsConfig} from "createEnvScripts/CreateReactTSConfig"
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
    createTsConfig = () => {
        const createReactTsConfig = new CreateReactTsConfig(this.topPath)
        createReactTsConfig.createFile()
    }
    run = ():void =>{
        this.topDirCreate()
        this.yarnInit()
        this.createChilderns()
        this.createTsConfig()
    }
}
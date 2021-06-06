import {DirectoryMaker} from "model/DirectoryMaker"
import {exeCommand} from "functions/ExeCommand"
import {CreateDistSrcBuild} from "createEnvScripts/CreateDistSrcBuild"
import {CreateReactTsConfig} from "createEnvScripts/CreateReactTSConfig"
import {CdAndInstall} from "model/CdAndInstall"
import {installReactPakcages, DInstallReactPackages} from "install-packages/InstallReactPackages"
export class CreateReactEnv{
    private topPath:string
    constructor(topPath:string){
        this.topPath = topPath
    }
    createTopDir = ():void => {
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
    private installReactPackages = () => {
        const cdAndInstall = new CdAndInstall(this.topPath,installReactPakcages)
        const cdAndDInastall = new CdAndInstall(this.topPath,DInstallReactPackages)
        cdAndInstall.exeInstall()
        cdAndDInastall.exeInstall("D") 
    }
    run = ():void =>{
        this.createTopDir()
        this.yarnInit()
        this.createChilderns()
        this.createTsConfig()
        this.installReactPackages()
    }
}
import {DirectoryMaker} from "model/DirectoryMaker"
import {exeCommand} from "functions/ExeCommand"
import {CreateDistSrcBuild} from "createEnvScripts/CreateDistSrcBuild"
import {CreateReactTsConfig} from "createEnvScripts/CreateReactTSConfig"
import {CdAndInstall} from "model/CdAndInstall"
import {installReactPakcages, DInstallReactPackages} from "install-packages/InstallReactPackages"
import {DInstallTypescriptReactPackages} from "install-packages/InstallTypescriptPackages"
import {CreateReactWebpackConfig} from "createEnvScripts/CreateReactWebpackConfig"
import {DInstallWebpackPackages} from "install-packages/InstallWebpackPackages"
import {CreateSrcIndex} from "createEnvScripts/CreateSrcIndex"

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
    createChilderns = ():void => {
        const createDistSrcBuild = new CreateDistSrcBuild(this.topPath)
        createDistSrcBuild.mkdirs()
    }
    createTsConfig = ():void => {
        const createReactTsConfig = new CreateReactTsConfig(this.topPath)
        createReactTsConfig.createFile()
    }
    private installReactPackages = ():void => {
        const cdAndInstall = new CdAndInstall(this.topPath,installReactPakcages)
        const cdAndDInastall = new CdAndInstall(this.topPath,DInstallReactPackages)
        cdAndInstall.exeInstall()
        cdAndDInastall.exeInstall("D") 
    }
    installTypescriptPackages = ():void => {
        const cdAndDInastall = new CdAndInstall(this.topPath,DInstallTypescriptReactPackages)
        cdAndDInastall.exeInstall("D")
    }
    createWeppackConfig = ():void => {
        const createReactWebpackConfig = new CreateReactWebpackConfig(this.topPath)
        createReactWebpackConfig.writeFile()
    }
    installWebpackPackages = ():void => {
        const cdAndDInastall = new CdAndInstall(this.topPath,DInstallWebpackPackages)
        cdAndDInastall.exeInstall()
    }
    createSrcIndex = ():void => {
        const createSrcIndex = new CreateSrcIndex(this.topPath)
        createSrcIndex.createHtml()
        createSrcIndex.createTsx()
    }
    run = ():void =>{
        this.createTopDir()
        this.yarnInit()
        this.createChilderns()
        this.createTsConfig()
        this.installReactPackages()
        this.installTypescriptPackages()
        this.installWebpackPackages()
        this.createWeppackConfig()
        this.createSrcIndex()
    }
}
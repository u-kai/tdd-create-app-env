import {DirectoryMaker} from "../model/DirectoryMaker"
import {exeCommand} from "../functions/ExeCommand"
import {CreateDistSrcBuild} from "../createEnvScripts/CreateDistSrcBuild"
import {CreateReactTsConfig} from "../createEnvScripts/CreateReactTSConfig"
import {CdAndInstall} from "../model/CdAndInstall"
import {installReactPakcages, DInstallReactPackages} from "../install-packages/InstallReactPackages"
import {DInstallTypescriptReactPackages} from "../install-packages/InstallTypescriptPackages"
import {CreateReactWebpackConfig} from "../createEnvScripts/CreateReactWebpackConfig"
import {DInstallWebpackPackages} from "../install-packages/InstallWebpackPackages"
import {CreateSrcIndex} from "../createEnvScripts/CreateSrcIndex"
import {Giter} from "../model/Giter"
import {CreateReactEslintrc} from "../createEnvScripts/CreateReactEslintrc"
import {DInstallEsLintPrettierHuskyPackagesReact} from "../install-packages/InstallEslintPrettierHuskyPackages"
import {CreateJestConfig} from "../createEnvScripts/CreateJestConfig"
import {DInstallJestPackages,DInstallJestPackagesReact} from "../install-packages/InstallJestPackages"
import {PackageJsonOperater} from "../createEnvScripts/PackageJsonOperater"
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
    git = () => {
        const giter = new Giter(this.topPath)
        giter.init()
        giter.createIgnore()
    }
    installEslintETC = () => {
        const cdAndDInastall = new CdAndInstall(this.topPath,DInstallEsLintPrettierHuskyPackagesReact)
        cdAndDInastall.exeInstall()
    }
    createEslintrc = () => {
        const createExlintrc = new CreateReactEslintrc(this.topPath)
        createExlintrc.writeFile()
    }
    installJest = () => {
        const cdAndDInastall = new CdAndInstall(this.topPath,DInstallJestPackages)
        cdAndDInastall.exeInstall()
    }
    private installReactJest = () => {
        const cdAndDInastall = new CdAndInstall(this.topPath, DInstallJestPackagesReact)
        cdAndDInastall.exeInstall()
    }
    createJestConfing = () => {
        const createJestConfing = new CreateJestConfig(this.topPath)
        createJestConfing.writeFile()
    }
    editPacageJson = () => {
        const editPackage = new PackageJsonOperater(this.topPath)
        editPackage.editToReact() 
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
        this.git()
        this.installEslintETC()
        this.createEslintrc()
        this.installJest()
        this.createJestConfing()
        this.installReactJest()
        this.editPacageJson()
    }
}
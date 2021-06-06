import {CreateReactEslintrc} from "../createEnvScripts/CreateReactEslintrc"
import {DInstallEsLintPrettierHuskyPackagesReact} from "../install-packages/InstallEslintPrettierHuskyPackages"
import {Giter} from "../model/Giter"
import {exeCommand} from "../functions/ExeCommand"
import {CdAndInstall} from "../model/CdAndInstall"
import {ExeHusky} from "../createEnvScripts/ExeHusky"
import {editReactPackageJson} from "../createEnvScripts/UseCreateReactAppPackageJson"
import {createEnvFile} from "../createEnvScripts/CreateENVFile"
import {installCreateReactAppPackages,DInstallCreateReactAppPackages} from "../install-packages/InstallCreateReactAppPackages"
import {CreateUnderSrc} from "../createEnvScripts/CreateUnderSrc"
export class UseCreateReactAPP{
    topPath:string
    constructor(topPath:string){
        this.topPath = topPath
    }
    createReactApp = ():void => {
        const cmd = `npx create-react-app ${this.topPath} --template typescript`
        exeCommand(cmd)
    }
    git = ():void => {
        const giter = new Giter(this.topPath)
        giter.init()
        giter.createIgnore()
    }
    createEslintrc = ():void => {
        const createExlintrc = new CreateReactEslintrc(this.topPath)
        createExlintrc.writeFile()
    }
    installEslintETC = () => {
        const cdAndDInastall = new CdAndInstall(this.topPath,DInstallEsLintPrettierHuskyPackagesReact)
        cdAndDInastall.exeInstall("D")
    }
    editPackage = () => {
        editReactPackageJson(this.topPath)
    }
    exeHusky = () => {
        const exeHusky = new ExeHusky(this.topPath)
        exeHusky.exeHusky()
    }
    createEnvFile = () => {
        createEnvFile(this.topPath)
    }
    installPackages = ():void => {
        const cdAndInstall = new CdAndInstall(this.topPath,installCreateReactAppPackages)
        cdAndInstall.exeInstall()
        const cdAndDInastall = new CdAndInstall(this.topPath,DInstallCreateReactAppPackages)
        cdAndDInastall.exeInstall("D")
    }
    createUnderSrc = () => {
        const createUnderSrc = new CreateUnderSrc(this.topPath)
        createUnderSrc.mkdirs()
    }
    run = ():void =>{
        this.createReactApp()
        this.createEnvFile()
        this.git()
        this.createEslintrc()
        this.installEslintETC()
        this.editPackage()
        // this.exeHusky()
        this.installPackages()
        this.createUnderSrc()
    }
}
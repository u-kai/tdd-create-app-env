import {CreateReactEslintrc} from "createEnvScripts/CreateReactEslintrc"
import {DInstallEsLintPrettierHuskyPackagesReact} from "install-packages/InstallEslintPrettierHuskyPackages"
import {Giter} from "model/Giter"
import {exeCommand} from "functions/ExeCommand"
import {CdAndInstall} from "model/CdAndInstall"
export class UseCreateReactAPP{
    topPath:string
    constructor(topPath:string){
        this.topPath = topPath
    }
    createReactApp = ():void => {
        const cmd = `npx create-react-app ${this.topPath} --template typescript`
        exeCommand(cmd)
    }
    gitIgnore = ():void => {
        const giter = new Giter(this.topPath)
        giter.createIgnore()
    }
    createEslintrc = ():void => {
        const createExlintrc = new CreateReactEslintrc(this.topPath)
        createExlintrc.writeFile()
    }
    installEslintETC = () => {
        const cdAndDInastall = new CdAndInstall(this.topPath,DInstallEsLintPrettierHuskyPackagesReact)
        cdAndDInastall.exeInstall()
    }
    run = ():void =>{
        this.createReactApp()
        this.gitIgnore()
        this.createEslintrc()
        this.installEslintETC()
    }
}
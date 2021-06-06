import {exeCommand} from "../functions/ExeCommand"
export class Installer{
    packageNames:string[]
    constructor(packageNames:string[]){
        this.packageNames = packageNames
    }
    returnCmd = ():string => {
        let cmd = ""
        this.packageNames.map((packageName)=>{
            cmd += `yarn add ${packageName}\n`
        })
        return cmd.substr(0,cmd.length-1)
    }
    returnDCmd = ():string => {
        let cmd = ""
        this.packageNames.map((packageName)=>{
            cmd += `yarn add -D ${packageName}\n`
        })
        return cmd.substr(0,cmd.length-1)
    }
    exeInstall = (d?:"D"):void => {
        if(d){
            exeCommand(this.returnDCmd())
            return
        }
        exeCommand(this.returnCmd())
    }
}
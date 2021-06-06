import {Installer} from "model/Installer"
import {exeCommand} from "functions/ExeCommand"
export class CdAndInstall extends Installer{
    private cdPath:string
    constructor(cdPath:string,packages:string[]){
        super(packages)
        this.cdPath = cdPath
    }
    private returnCmdWithCd = ():string =>{
        return `cd ${this.cdPath}\n${this.returnCmd()}`
    }

    private returnDCmdWithCd = ():string => {
        return `cd ${this.cdPath}\n${this.returnDCmd()}`
    }
    exeInstall = (d?:"D"):void => {
        if(d){
            exeCommand(this.returnDCmdWithCd())
            return
        }
        exeCommand(this.returnCmdWithCd())
    }
}
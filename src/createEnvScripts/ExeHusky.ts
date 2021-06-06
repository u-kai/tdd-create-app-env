import {exeCommand} from "../functions/ExeCommand"

export class ExeHusky{
    path:string
    constructor(path:string){
        this.path = path
    }
    exeHusky = ():void => {
        const cmd = `cd ${this.path}
        npx husky install`
        exeCommand(cmd)
        const cmd2 = `cd ${this.path}
        npx husky add .husky/pre-commit "yarn lint-staged"`
        exeCommand(cmd2)
    }
}
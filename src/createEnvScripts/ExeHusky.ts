import {exeCommand} from "../functions/ExeCommand"

export class ExeHusky{
    path:string
    constructor(path:string){
        this.path = path
    }
    exeHusky = ():void => {
        const cmd = `cd ${this.path}
        npx jusky install
        npx husky add .husky/pre-commit "yarn lint-staged"`
        exeCommand(cmd)
    }
}
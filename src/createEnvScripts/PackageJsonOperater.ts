import {exeCommand} from "functions/ExeCommand"
import {editReactPackageJson} from "createEnvScripts/EditReactPackageJson"
export class PackageJsonOperater{
    path:string
    constructor(path:string){
        this.path = path
    }
    init = ():void => {
        const cmd = `cd ${this.path}
        yarn init -y`
        exeCommand(cmd)
    }
    editToReact = ():void => {
        editReactPackageJson(`${this.path}/package.json`)
    }
} 
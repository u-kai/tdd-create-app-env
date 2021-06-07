import {exeCommand} from "../functions/ExeCommand"
import {editReactPackageJson} from "../createEnvScripts/EditReactPackageJson"
import {editBackPackageJson} from "../createEnvScripts/EditBackPackageJson"
import * as path from "path"
export class PackageJsonOperater{
    topPath:string
    constructor(topPath:string){
        this.topPath = topPath
    }
    init = ():void => {
        const cmd = `cd ${this.topPath}
        yarn init -y`
        exeCommand(cmd)
    }
    editToReact = ():void => {
        editReactPackageJson(path.resolve(this.topPath,"package.json"))
    }
    editToBack = ():void => {
        editBackPackageJson(path.resolve(this.topPath,"package.json"))
    }
} 
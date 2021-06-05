import {installPackages} from "createEnvScripts/InstallPackages"
import {isExist} from "./model/IsExist"

const installedPath = "top/top-back/node_modules"
installPackages()
it("is installed",()=>{
    expect(isExist(installedPath)).toBe(true)
})
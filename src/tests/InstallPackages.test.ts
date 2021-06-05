import {exeCommand} from "createEnvScripts/ExeCommand"
import {isExist} from "./model/IsExist"

const installedPath = "top/top-back/node_modules"
const cmd = `cd top/top-back
yarn init -y
yarn add -D typescript
`
exeCommand(cmd)
it("is installed",()=>{
    expect(isExist(installedPath)).toBe(true)
})
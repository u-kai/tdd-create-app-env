import {execSync} from "child_process"

export const exeCommand = (cmd:string) => {
    execSync(cmd)
} 
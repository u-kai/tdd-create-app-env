import {CreateBackAndReactEnv} from "./createEnvScripts/CreateBackAndReactEnv"
import * as path from "path"
const main = () => {
    const dir = process.argv[2]
    const createBackAndReactEnv = new CreateBackAndReactEnv(dir) 
    createBackAndReactEnv.run()
    createBackAndReactEnv.console()
}
main()
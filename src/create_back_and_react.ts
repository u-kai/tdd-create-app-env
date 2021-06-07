import {CreateBackAndReactEnv} from "./createEnvScripts/CreateBackAndReactEnv"
import * as path from "path"
const main = () => {
    const dir = path.resolve(process.argv[2])
    const createBackAndReactEnv = new CreateBackAndReactEnv(dir) 
    createBackAndReactEnv.run()
}
main()
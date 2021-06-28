import {CreateBackEnv} from "./createEnvScripts/CreateBackEnv"

const main = () => {
    const dir = process.argv[2]
    const createBackEnv = new CreateBackEnv(dir) 
    createBackEnv.run()
}
main()
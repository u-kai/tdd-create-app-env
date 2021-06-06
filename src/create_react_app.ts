import {UseCreateReactAPP} from "./createEnvScripts/UseCreateReactApp"
import * as path from "path"
const main = () => {
    const dir = path.resolve(process.argv[2])
    const useCreateReactAPP = new UseCreateReactAPP(dir) 
    useCreateReactAPP.run()
}
main()
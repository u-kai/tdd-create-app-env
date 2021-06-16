import {UseCreateReactAPP} from "./createEnvScripts/UseCreateReactApp"

const main = () => {
    const dir = process.argv[2]
    const useCreateReactAPP = new UseCreateReactAPP(dir) 
    useCreateReactAPP.run()
}
main()
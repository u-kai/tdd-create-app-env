import * as fs from "fs"
import * as path from "path"
import {CreateReactTSConfig} from "../createEnvScripts/CreateTSConfig"

const dir = "top-front"
const tsConfigPath = path.resolve("top",dir)
const createFrontTsConfig = new CreateReactTSConfig(tsConfigPath)
createFrontTsConfig.createFile()
it("createTSConfig test",()=>{
    expect(fs.existsSync(tsConfigPath)).toEqual(true)
})
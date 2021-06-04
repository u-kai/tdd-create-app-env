import {CreateFrontDirectory} from "../createEnvScripts/CreateFrontDirectory"
import * as path from "path"
import * as fs from "fs"

const topPath = path.resolve("top")
const frontPath = path.resolve("top",`top-front`)
const createFrontDirectory = new CreateFrontDirectory(topPath)
createFrontDirectory.mkdir()

it("front is exist?",()=>{
    expect(fs.existsSync(frontPath)).toEqual(true)
})
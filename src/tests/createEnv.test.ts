import {execSync} from "child_process"
import * as fs from "fs"
import {DirectoryMaker} from "../createEnv"


const topDirectory = process.argv[3]
const topMkdir = new DirectoryMaker(topDirectory)
topMkdir.mkdir()
it("is top directory exits",()=>{
    expect(fs.existsSync(topDirectory)).toBe(true)
})
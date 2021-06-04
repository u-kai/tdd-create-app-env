import * as fs from "fs"
import {DirectoryMaker} from "../model/DirectoryMaker"
import * as path from "path"


const topDirectory = process.argv[3]
const topMkdir = new DirectoryMaker(topDirectory)
const packageJson = "package.json"
const topPackageJsonPath = path.resolve(topDirectory,packageJson)
topMkdir.mkdir()
it("is top directory exits",()=>{
    expect(fs.existsSync(topDirectory)).toBe(true)
    expect(fs.existsSync(topPackageJsonPath)).toBe(true)
})
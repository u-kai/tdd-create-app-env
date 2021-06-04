import * as fs from "fs"
import {DirectoryMaker} from "../model/DirectoryMaker"
import * as path from "path"
import {FileMaker} from "../model/FileMaker"


const topDirectory = process.argv[3]
const topMkdir = new DirectoryMaker(topDirectory)
topMkdir.mkdir()

const packageJson = "package.json"
const topPackageJsonPath = path.resolve(topDirectory,packageJson)
const topPackageJsonData = 
{
    "exclude":[
        "."
    ]
}
const topPackageJsonMaker = new FileMaker(topPackageJsonPath,"")
topPackageJsonMaker.writeFile()

it("is top directory exits",()=>{
    expect(fs.existsSync(topDirectory)).toBe(true)
    expect(fs.existsSync(topPackageJsonPath)).toBe(true)
})
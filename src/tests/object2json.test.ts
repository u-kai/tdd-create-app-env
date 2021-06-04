import * as fs from "fs"
import {JsonFileMaker} from "../model/JsonFileMaker"
import * as path from "path"


const purposeFilePath = path.resolve("src/tests/purposeFiles/topPackage.json")
const topPackageJsonPath = path.resolve("src/tests/testFiles/package.json")
const topPackageJsonData = {
    "extends":[
        "."
    ]
}
const dataWiter = new JsonFileMaker(topPackageJsonPath,topPackageJsonData)
dataWiter.writeFile()
const purposeJson = JSON.parse(fs.readFileSync(purposeFilePath,"utf-8"))
const data = JSON.parse(fs.readFileSync(topPackageJsonPath,"utf-8"))
it("data to json? and equal?",()=>{
    expect(purposeJson).toStrictEqual(data)
})
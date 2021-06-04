import * as fs from "fs"
import {JsonFileMaker} from "../model/JsonFileMaker"
import * as path from "path"


const purposeFilePath = path.resolve("src/tests/purposeFiles/topPackage.json")
const purposeJson = JSON.parse(fs.readFileSync(purposeFilePath,"utf-8"))
const data = {
    "extends":[
        "."
    ]
}
it("data to json? and equal?",()=>{
    expect(purposeJson).toStrictEqual(data)
})
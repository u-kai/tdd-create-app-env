import {CompareFileTest} from "../model/CompareFileTest"
import {data} from "../../file-data/reactWebpackConfigData"
import {CompareFile} from "../model/CompareFile"
import * as fs from "fs"

const purpose = "src/tests/purposeFiles/webpack.config.js"
const purposeData = fs.readFileSync(purpose,"utf-8")
// const compareFile = new CompareFile(purpose,"")
// const purposeData  = compareFile.returnPurpose()
it("is data equal",()=>{
    expect(data).toStrictEqual(purposeData)
})


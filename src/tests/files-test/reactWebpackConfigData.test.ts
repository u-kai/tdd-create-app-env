import {reactWebpackConfigData} from "../../file-data/reactWebpackConfigData"
import * as fs from "fs"

const purpose = "src/tests/purposeFiles/webpack.config.js"
const purposeData = fs.readFileSync(purpose,"utf-8")

it("is data equal",()=>{
    expect(reactWebpackConfigData).toStrictEqual(purposeData)
})


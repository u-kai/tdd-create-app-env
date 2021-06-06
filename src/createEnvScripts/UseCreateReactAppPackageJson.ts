import { EditJsonFile } from "../createEnvScripts/EditJsonFile"
// import {EditJsonFileDelegate} from "interfaces/EditJson"
import * as path from "path"
const changeKeys = ["scripts","lint-staged","prettier"]
const scripts = {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "prepare": "husky install",
    "lint-staged": "lint-staged",
    "lint-fix": "eslint --fix './src/**/*.{js,ts,tsx}' && prettier --write './src/**/*.{js,ts,tsx}'"
}
const lintStaged = {
    "src/**/*.{js,ts,tsx}": [
        "npm run lint-fix"
    ]
}
const prettier = {
    "printWidth": 120,
    "semi": false,
    "singleQuote": true,
    "tabWidth": 4
}
const changeDatas = [scripts,lintStaged,prettier]
export const editReactPackageJson = (topPath:string) => {
    const filePath = path.resolve(topPath,"package.json")
    changeKeys.map((changeKey,i)=>{
        const editPackage = new EditJsonFile(filePath,changeKey,changeDatas[i])
        editPackage.edit()
    })
}
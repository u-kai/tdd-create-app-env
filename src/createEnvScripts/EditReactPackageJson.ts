import { EditJsonFile } from "../createEnvScripts/EditJsonFile"
const changeKeys = ["scripts","lint-staged","prettier"]
const scripts = {
    "start": "webpack-dev-server --open",
    "compile": "tsc",
    "test": "jest",
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
export const editReactPackageJson = (filePath:string) => {
    changeKeys.map((changeKey,i)=>{
        const editPackage = new EditJsonFile(filePath,changeKey,changeDatas[i])
        editPackage.edit()
    })
}




import { EditJsonFile } from "../createEnvScripts/EditJsonFile"
const changeKeys = ["scripts","lint-staged","prettier"]
const scripts = {
    "start": "webpack-dev-server --open",
    "compile": "tsc",
    "prepare": "husky install",
    "lint-fix": "eslint --fix './src/**/*.{js,ts,tsx}' && prettier --write './src/**/*.{js,ts,tsx}'",
    "lint-staged":"lint-staged"
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




import { EditJsonFile } from '../createEnvScripts/EditJsonFile'
// import {EditJsonFileDelegate} from "interfaces/EditJson"
const changeKeys = ['scripts', 'lint-staged', 'prettier']
const scripts = {
    start: 'node build/index.js',
    compile: 'tsc',
    dev: 'ts-node-dev --respawn src/index.ts',
    'ts-node': './node_modules/.bin/ts-node -r tsconfig-paths/register',
    test: 'jest',
    watch: 'tsc-watch --onSuccess "npm start"',
    prepare: 'husky install',
    'lint-staged': 'lint-staged',
    'lint-fix': "eslint --fix './src/**/*.{js,ts,tsx}' && prettier --write './src/**/*.{js,ts,tsx}'",
}
const lintStaged = {
    'src/**/*.{js,ts,tsx}': ['npm run lint-fix'],
}
const prettier = {
    printWidth: 120,
    semi: false,
    singleQuote: true,
    tabWidth: 4,
}
const changeDatas = [scripts, lintStaged, prettier]
export const editBackPackageJson = (filePath: string) => {
    changeKeys.map((changeKey, i) => {
        const editPackage = new EditJsonFile(filePath, changeKey, changeDatas[i])
        editPackage.edit()
    })
}

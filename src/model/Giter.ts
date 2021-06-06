import {exeCommand} from "../functions/ExeCommand"
import {FileMaker} from "../model/FileMaker"
export class Giter{
    parentPath:string
    gitIgnore:string
    constructor(parentPath:string){
        this.parentPath = parentPath
        this.gitIgnore = `/node_modules
/.pnp
.pnp.js

# testing
/coverage

# production
/build

# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*
# packages
node_modules/
package-lock.json

# local files
.idea/
.DS_Store
*.log`
    }
    init = ():void => {
        const cmd = `cd ${this.parentPath}
                    git init`
        exeCommand(cmd)
    }
    createIgnore = () => {
        const gitIgnorePath = `${this.parentPath}/.gitignore`
        const fileMaker = new FileMaker(gitIgnorePath,this.gitIgnore)
        fileMaker.writeFile()
    }
}
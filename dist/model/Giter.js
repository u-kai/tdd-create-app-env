"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Giter = void 0;
const ExeCommand_1 = require("../functions/ExeCommand");
const FileMaker_1 = require("../model/FileMaker");
class Giter {
    constructor(parentPath) {
        this.init = () => {
            const cmd = `cd ${this.parentPath}
                    git init`;
            ExeCommand_1.exeCommand(cmd);
        };
        this.createIgnore = () => {
            const gitIgnorePath = `${this.parentPath}/.gitignore`;
            const fileMaker = new FileMaker_1.FileMaker(gitIgnorePath, this.gitIgnore);
            fileMaker.writeFile();
        };
        this.parentPath = parentPath;
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
.vscode
npm-debug.log*
yarn-debug.log*
yarn-error.log*
# packages
node_modules/
package-lock.json

# local files
.idea/
.DS_Store
*.log`;
    }
}
exports.Giter = Giter;

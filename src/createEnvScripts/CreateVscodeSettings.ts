import { DirectoryMaker } from '../model/DirectoryMaker'
import { FileMaker } from '../model/FileMaker'
import * as path from 'path'
export class CreateVscodeSettings extends DirectoryMaker {
    private fileMaker: FileMaker
    constructor(topPath: string) {
        super(path.resolve(topPath, '.vscode'))
        const fileName = 'settings.json'
        const fileContent = `{
            "[typescript]": {
                "editor.defaultFormatter": "esbenp.prettier-vscode" // フォーマッタをprettierに指定
            },
            "editor.formatOnSave": true, // ファイル保存時にPrettierでフォーマット
            "editor.codeActionsOnSave": {
                "source.fixAll.eslint": true // ファイル保存時にESLintでフォーマット
            }
        }
        `
        this.fileMaker = new FileMaker(path.resolve(topPath, '.vscode', fileName), fileContent)
    }
    createDirAndFile = (): void => {
        this.mkdir()
        this.fileMaker.writeFile()
    }
}

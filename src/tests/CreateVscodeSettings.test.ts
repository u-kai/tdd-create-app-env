import { CreateVscodeSettings } from 'createEnvScripts/CreateVscodeSettings'
import * as fs from 'fs'
const setting = new CreateVscodeSettings('src')
setting.createDirAndFile()

it('is create .vscode/settings.json', () => {
    expect(fs.existsSync('src/.vscode/settings.json')).toBe(true)
})

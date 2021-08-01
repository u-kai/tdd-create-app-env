import { CdAndInstall } from '../model/CdAndInstall'

const cdPath = 'top/top-back'
const packages = ['react', 'react-dom']
const DPackages = ['typescript', 'ts-loader']
const installer = new CdAndInstall(cdPath, packages)
const DInstaller = new CdAndInstall(cdPath, DPackages)
const cmd = installer.returnCmdWithCd()
const DCmd = DInstaller.returnDCmdWithCd()
it('Do installer output cmd?', () => {
    expect(cmd).toEqual(`cd top/top-back
npm install react
npm install react-dom`)
    expect(DCmd).toEqual(`cd top/top-back
npm install -D typescript
npm install -D ts-loader`)
})

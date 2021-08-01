import { Installer } from 'model/Installer'

const packages = ['react', 'react-dom']
const DPackages = ['typescript', 'ts-loader']
const installer = new Installer(packages)
const DInstaller = new Installer(DPackages)
const cmd = installer.returnCmd()
const DCmd = DInstaller.returnDCmd()
it('Do installer output cmd?', () => {
    expect(cmd).toEqual(`npm install react
npm install react-dom`)
    expect(DCmd).toEqual(`npm install -D typescript
npm install -D ts-loader`)
})

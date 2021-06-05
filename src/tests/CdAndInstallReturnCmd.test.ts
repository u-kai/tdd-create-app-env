import {CdAndInstall} from "../model/CdAndInstall"

const cdPath = "top/top-back"
const packages = ["react","react-dom"]
const DPackages = ["typescript","ts-loader"]
const installer = new CdAndInstall(cdPath,packages)
const DInstaller = new CdAndInstall(cdPath,DPackages)
const cmd = installer.returnCmdWithCd()
const DCmd = DInstaller.returnDCmdWithCd()
it("Do installer output cmd?",()=>{
    expect(cmd).toEqual(`cd top/top-back
yarn add react
yarn add react-dom`)
    expect(DCmd).toEqual(`cd top/top-back
yarn add -D typescript
yarn add -D ts-loader`)
})
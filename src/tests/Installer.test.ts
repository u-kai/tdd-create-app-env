import {Installer} from "model/Installer"

const packages = ["react","react-dom"]
const installer = new Installer(packages)
const cmd = installer.returnCmd()
it("Do installer output cmd?",()=>{
    expect(cmd).toEqual(`yarn add react
yarn add react-dom`)
})
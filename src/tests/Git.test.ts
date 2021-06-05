import {Giter} from "model/Giter"
import {isExist} from "./model/IsExist"

const gitPath = "top"
const gitIgnore = "top/.gitignore"
const giter = new Giter(gitPath)
giter.init()
giter.createIgnore()
it("is Exits .git and ignore",()=>{
    expect(isExist(`${gitPath}/.git`)).toEqual(true)
    expect(isExist(gitIgnore)).toEqual(true)
})
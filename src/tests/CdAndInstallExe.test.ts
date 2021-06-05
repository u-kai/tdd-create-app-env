import {CdAndInstall} from "model/CdAndInstall"
import {isExist} from "./model/IsExist"

const cdPath = "top/top-front"
const packages = ["react","react-dom"]
const cdAndInstall = new CdAndInstall(cdPath,packages)
const purposePath = "top/top-front/node_modules/react"
cdAndInstall.exeInstall()
it("is installed",()=>{
    expect(isExist(purposePath)).toBe(true)
})
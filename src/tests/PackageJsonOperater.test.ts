import {PackageJsonOperater} from "createEnvScripts/PackageJsonOperater"
import {CompareJsonFileTest} from "./model/CompareJsonFileTest"

const path = "top/top-react"
const packageJsonOperater = new PackageJsonOperater(path)
packageJsonOperater.init()
packageJsonOperater.editToReact()
const compareJsonFileTest = new CompareJsonFileTest("package.json","package.json",path)
compareJsonFileTest.test()

import {CreateJestConfig} from "createEnvScripts/CreateJestConfig"
import {CompareFileTest} from "./model/CompareFileTest"

const filePath = "src/tests/testFiles/jest.config.ts"
const createJestConfig = new CreateJestConfig(filePath)
createJestConfig.writeFile()

const fileName = "jest.config.ts"
const compareFileTest = new CompareFileTest(fileName,fileName)
compareFileTest.test()
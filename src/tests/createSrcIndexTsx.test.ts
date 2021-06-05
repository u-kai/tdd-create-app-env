import {createSrcIndexTsx} from "createEnvScripts/CreateSrcIndexTsx"
import {CompareFileTest} from "./model/CompareFileTest"

createSrcIndexTsx()
const fileName = "index.tsx"
const compareFileTest = new CompareFileTest(fileName,fileName)
compareFileTest.test()
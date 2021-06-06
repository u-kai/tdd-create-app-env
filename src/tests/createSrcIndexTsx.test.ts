import {reateSrcIndex} from "createEnvScripts/CreateSrcIndex"
import {CompareFileTest} from "./model/CompareFileTest"

createSrcIndexTsx()
const fileName = "index.tsx"
const compareFileTest = new CompareFileTest(fileName,fileName)
compareFileTest.test()
import {createSrcIndex} from "createEnvScripts/CreateSrcIndex"
import {CompareFileTest} from "./model/CompareFileTest"

createSrcIndex()
const fileName = "index.html"
const compareFileTest = new CompareFileTest(fileName,fileName)
compareFileTest.test()
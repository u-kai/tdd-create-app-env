import {createSrcIndexHtml} from "createEnvScripts/CreateSrcIndexHtml"
import {CompareFileTest} from "./model/CompareFileTest"

createSrcIndexHtml()
const fileName = "index.html"
const compareFileTest = new CompareFileTest(fileName,fileName)
compareFileTest.test()
import {CreateUnderSrc} from "../createEnvScripts/CreateUnderSrc"
import {ExistTestProvider} from "./model/ExistTestProvider" 

const childrens = ["components",
"hocks",
"types",
"router",
"store",
"model",
"functions",
"components/atoms",
"components/templates",
"components/organisms",
"components/pages",
"components/molecules",
]
const createUnderSrc = new CreateUnderSrc("src/tests/testFiles")
createUnderSrc.mkdirs()
const existTestProvider = new ExistTestProvider("src/tests/testFiles/src",childrens)
existTestProvider.test()
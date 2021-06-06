"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CreateUnderSrc_1 = require("../createEnvScripts/CreateUnderSrc");
const ExistTestProvider_1 = require("./model/ExistTestProvider");
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
];
const createUnderSrc = new CreateUnderSrc_1.CreateUnderSrc("src/tests/testFiles");
createUnderSrc.mkdirs();
const existTestProvider = new ExistTestProvider_1.ExistTestProvider("src/tests/testFiles/src", childrens);
existTestProvider.test();

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CreateENVFile_1 = require("createEnvScripts/CreateENVFile");
const IsExist_1 = require("./model/IsExist");
const top = "src/tests/testFiles";
CreateENVFile_1.createEnvFile(top);
it("test env", () => {
    expect(IsExist_1.isExist(`${top}/src/.env`)).toEqual(true);
});

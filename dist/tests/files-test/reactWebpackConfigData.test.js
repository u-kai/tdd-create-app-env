"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reactWebpackConfigData_1 = require("../../file-data/reactWebpackConfigData");
const fs = require("fs");
const purpose = "src/tests/purposeFiles/webpack.config.js";
const purposeData = fs.readFileSync(purpose, "utf-8");
it("is data equal", () => {
    expect(reactWebpackConfigData_1.reactWebpackConfigData).toStrictEqual(purposeData);
});

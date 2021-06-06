"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExistTestProvider = void 0;
const path = require("path");
const IsExist_1 = require("./IsExist");
class ExistTestProvider {
    constructor(topPath, childrens) {
        this.test = () => {
            it(`test exits ${this.topPath} and Unders`, () => {
                expect(IsExist_1.isExist(this.topPath)).toEqual(true);
                this.childrens.map((childeren) => {
                    expect(IsExist_1.isExist(path.resolve(this.topPath, childeren))).toEqual(true);
                });
            });
        };
        this.topPath = topPath;
        this.childrens = childrens;
    }
}
exports.ExistTestProvider = ExistTestProvider;

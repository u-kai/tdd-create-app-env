"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CreateReactEnv_1 = require("../createEnvScripts/CreateReactEnv");
const ExistTestProvider_1 = require("./model/ExistTestProvider");
const topPath = 'top-react';
const paths = [
    'dist',
    'src',
    'build',
    'package.json',
    'tsconfig.json',
    'node_modules',
    'node_modules/react',
    'node_modules/react-dom',
    'node_modules/styled-components',
    'node_modules/typescript',
    'webpack.config.js',
    'src/index.tsx',
    'src/index.html',
    'node_modules/webpack',
    '.eslintrc.js',
    '.git',
    '.gitignore',
    'jest.config.ts',
];
const createReactEnv = new CreateReactEnv_1.CreateReactEnv(topPath);
createReactEnv.run();
const existTestProvider = new ExistTestProvider_1.ExistTestProvider(topPath, paths);
existTestProvider.test();

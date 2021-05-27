// the jest configuration file, used for integrating jest with angular
// using 'jest-angulr-pteset'. 
// the jest will start reading the ts/js files from the root of the application
// the 'Angular-CLI' project already contains 'test.ts' for test configuration


// compile the Test Code writtes in TypeScript and make it avaiable for Jest 
const {compilerOptions} = require('./tsconfig.json');
// read standard Angular Modules as well as Developer defined modules 
// and use them in test
const {pathsToModuleNameMapper} = require('ts-jest/utils');

// define Jest Env. COnfiguration for Angular

module.exports = {
    preset: 'jest-preset-angular',
    roots: ['<rootDir>/src/'],
    testMatch: ['**/+(*.)+(spec).+(ts)'],
    setupFilesAfterEnv: ['<rootDir>/src/test.ts'],
    collectCoverage:true,
    coverageReporters:['html'],
    coverageDictionary: 'coverage/my-ng-app',
    // load all moduels (standard/dev.) with their namespaces
    // from the root Directory and use them in Jest for compilation
    // and test execution 
    moduleNameMapper:pathsToModuleNameMapper(compilerOptions.paths || {}, {
        prefix: 'roorDir'
    })
};

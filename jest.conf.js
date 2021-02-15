const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig.spec');

module.exports = {
  preset: 'jest-preset-angular',
  globals: {
    'buildInfo': {
      allowSyntheticDefaultImports: true,
    },
    'since': {
      allowSyntheticDefaultImports: true,
    },
  },
  testMatch: ['**/+(*.)+(spec).+(ts)'],
  testPathIgnorePatterns: ['/node_modules/'],
  collectCoverageFrom: ['<rootDir>/app/**/*.ts'],
  setupFilesAfterEnv: [
    'jest-extended',
    'jest-expect-message',
  ],
  transform: {
    "^.+\\.(ts|html)$": "ts-jest",
    "^.+\\.js$": "babel-jest"
  },
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths || {}, {
    prefix: '<rootDir>/../'
  })
};

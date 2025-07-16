/** @type {import('jest').Config} */
const config = {
  verbose: true,
  collectCoverage: false,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.js',
    '!**/node_modules/**',
    '!<rootDir>/src/**/*.mock.*',
  ],
  testMatch: ['<rootDir>/src/**/*.test.js'],
  testEnvironment: 'node',
  setupFiles: ['<rootDir>/internal/jest/jest.setup.js'],
  // setupFilesAfterEnv: ['<rootDir>/internal/jest/setup-tests.js'],
  setupFilesAfterEnv: ['<rootDir>/internal/jest/custom-matchers.js'],
  globals: {
    __DEV__: true,
  },
};

module.exports = config;

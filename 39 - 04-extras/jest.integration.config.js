/** @type {import('jest').Config} */
const config = {
  verbose: true,
  collectCoverage: false,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.js',
    '!**/node_modules/**',
    '!<rootDir>/src/**/*.mock.*',
  ],
  testMatch: ['<rootDir>/src/**/*.spec.js'],
};

module.exports = config;

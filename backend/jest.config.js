module.exports = {
  // Stop running tests after `n` failures
  bail: true,
  // Automatically clear mock calls and instances between every test
  clearMocks: true,
  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,
  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: [
    'src/**',
    '!src/database/index.js',
    '!src/database/migrations/**',
  ],
  // The directory where Jest should output its coverage files
  coverageDirectory: '__tests__/coverage',
  // The test environment that will be used for testing
  testEnvironment: 'node',
  // The glob patterns Jest uses to detect test files
  testMatch: [
    '**/__tests__/**/*.test.js?(x)',
    // "**/?(*.)+(spec|test).[tj]s?(x)"
  ],
};

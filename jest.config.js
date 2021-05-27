module.exports = {
  moduleNameMapper: {
    '^@/components(.*)$': '<rootDir>/src/components$1',
    '^@/containers(.*)$': '<rootDir>/src/containers$1',
    '^@/utils(.*)$': '<rootDir>/src/utils$1',
    '^@/tests(.*)$': '<rootDir>/src/tests$1',
  },
  setupFilesAfterEnv: ['<rootDir>/src/tests/mock.js'],
  coverageReporters: ['json', 'lcov', 'text', 'clover'],
  coveragePathIgnorePatterns: ['node_modules', '<rootDir>/src/.umi'],
  automock: false,
};

const path = require('path');

module.exports = ({ setupFilesAfterEnv }) => ({
  verbose: true,
  setupFilesAfterEnv: [setupFilesAfterEnv],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': path.join(__dirname, './__mocks__/fileMock.js'),
    '\\.(css|less)$': path.join(__dirname, './__mocks__/styleMock.js'),
  },
  coveragePathIgnorePatterns: ['/node_modules/', '/coverage/', '/types/'],
  testMatch: ['**/*.test.{ts,tsx}'],
  collectCoverageFrom: ['**/*.{ts,tsx}', '!**/*.stories.tsx'],
});

export default {
  clearMocks: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  coverageReporters: ['lcov'],
  testEnvironment: 'node',
  preset: 'ts-node',
  testMatch: ['**/test/**/*.ts']
}

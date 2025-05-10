import type { Config } from 'jest'

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s$': ['ts-jest', { tsconfig: 'tsconfig.jest.json' }],
  },
  testMatch: ['**/__tests__/**/*.spec.ts', '**/?(*.)+(spec|test).ts'],
  // collectCoverage: true,
  // collectCoverageFrom: [
  //   '<rootDir>/src/**/*.ts',
  //   '!<rootDir>/src/**/*.d.ts',
  //   '!<rootDir>/src/**/*.{test,spec}.ts',
  // ],
  // coverageDirectory: 'coverage',
  // coverageReporters: ['json', 'lcov', 'text'],
  clearMocks: true,
  resetMocks: true,
  restoreMocks: true,
  moduleNameMapper: {
    '^@core/(.*)$': '<rootDir>/../../core/src/$1',
    '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/__mocks__/fileMock.ts',
    '\\.(css|less|scss)$': '<rootDir>/__mocks__/styleMock.ts',
  },
}

export default config

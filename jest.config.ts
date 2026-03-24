import type { Config } from 'jest'

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  rootDir: '.',
  testMatch: ['<rootDir>/tests/**/*.spec.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'vue', 'json'],
  transform: {
    '^.+\\.ts$': ['ts-jest', { tsconfig: { strict: true } }],
    '^.+\\.vue$': '@vue/vue3-jest'
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/app/$1',
    '^@nativescript/core$': '<rootDir>/tests/__mocks__/nativescript-core.ts',
    '^router-vue-native$': '<rootDir>/tests/__mocks__/nativescript-vue-router.ts',
    '^nativescript-vue$': '<rootDir>/tests/__mocks__/nativescript-vue.ts'
  },
  setupFilesAfterEnv: [],
  collectCoverageFrom: [
    'app/**/*.{ts,vue}',
    '!app/app.ts',
    '!app/App.vue'
  ],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov', 'html'],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70
    }
  },
  verbose: true
}

export default config

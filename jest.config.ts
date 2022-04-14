import type {Config} from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  automock: true,
  transformIgnorePatterns: ['node_modules/(?!@react-native|react-native)'],
};
export default config;

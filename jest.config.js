module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  transform: {
    '^.+\\.svg$': 'jest-transformer-svg',
  },
  setupFilesAfterEnv: [
    './node_modules/react-native-gesture-handler/jestSetup.js',
    './src/test/jest-setup.tsx',
  ],
};

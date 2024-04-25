import { MetroConfig, getDefaultConfig } from 'expo/metro-config';

const defaultConfig = getDefaultConfig(__dirname) as MetroConfig;

// Add TypeScript file extensions to the sourceExts array
const customConfig = {
  ...defaultConfig,
  resolver: {
    ...defaultConfig.resolver,
    sourceExts: [
      ...defaultConfig.resolver.sourceExts,
      'jsx',
      'js',
      'ts',
      'tsx',
    ],
  },
};

export default customConfig;

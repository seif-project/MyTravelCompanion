module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@components': './src/components',
            '@screens': './src/screens',
            '@navigation': './src/navigation',
            '@store': './src/store',
            '@services': './src/services',
            '@hooks': './src/hooks',
            '@contexts': './src/contexts',
            '@utils': './src/utils',
            '@constants': './src/constants',
            '@types': './src/types',
            '@styles': './src/styles',
            '@locales': './src/locales',
          },
        },
      ],
      'react-native-reanimated/plugin',
    ],
  };
};

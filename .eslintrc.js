module.exports = {
  env: {
    browser: true,
    es2021: true,
    'react-native/react-native': true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-native/all',
    'plugin:prettier/recommended', // Affiche les erreurs Prettier en tant qu'erreurs ESLint
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'react-native', 'prettier'],
  rules: {
    // Vos règles personnalisées
    'prettier/prettier': ['error'],
    'react/react-in-jsx-scope': 'off', // Non nécessaire avec React 17+
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
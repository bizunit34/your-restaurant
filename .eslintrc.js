module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    env: {
      browser: true,
      es6: true,
      node: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'plugin:jsx-a11y/recommended',
      'plugin:import/errors',
      'plugin:import/warnings',
      'plugin:import/typescript',
      'plugin:@typescript-eslint/recommended',
      'prettier', // Enables eslint-config-prettier
      'plugin:prettier/recommended', // Runs Prettier as an ESLint rule
    ],
    rules: {
      'react/react-in-jsx-scope': 'off', // Not needed with React 17+
      '@typescript-eslint/no-unused-vars': ['error'],
      'prettier/prettier': 'error',
    },
  };
  module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    env: {
      browser: true,
      es6: true,
      node: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'plugin:jsx-a11y/recommended',
      'plugin:import/errors',
      'plugin:import/warnings',
      'plugin:import/typescript',
      'plugin:@typescript-eslint/recommended',
      'prettier', // Enables eslint-config-prettier
      'plugin:prettier/recommended', // Runs Prettier as an ESLint rule
    ],
    rules: {
      'react/react-in-jsx-scope': 'off', // Not needed with React 17+
      '@typescript-eslint/no-unused-vars': ['error'],
      'prettier/prettier': 'error',
    },
  };
  
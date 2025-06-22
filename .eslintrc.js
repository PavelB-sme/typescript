/* eslint-env node */

module.exports = {
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true
  },
  extends: [
    'eslint:recommended',
    'plugin:jest/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    // Базовые правила
    'indent': ['error', 2],
    'quotes': ['error', 'single'],
    
    // Правила Jest
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error'
  },
  overrides: [
    {
      files: ['*.config.js', 'webpack.config.js'],
      env: {
        node: true // Разрешает require/module.exports
      },
      rules: {
        quotes: ['error', 'single'],
        'no-undef': 'off'
      }
    }
  ]
};
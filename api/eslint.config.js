const { FlatCompat } = require('@eslint/eslintrc');
const js = require('@typescript-eslint/eslint-plugin');
const parser = require('@typescript-eslint/parser');

const compat = new FlatCompat();

module.exports = [
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: parser,
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
      },
    },
    plugins: {
      '@typescript-eslint': js,
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
];

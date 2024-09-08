import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat({
  baseDirectory: __dirname, // Chemin racine du projet
});

export default [
  {
    files: ['src/**/*.ts'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      project: './tsconfig.json',
      sourceType: 'module',
    },
    plugins: ['@typescript-eslint', '@angular-eslint'],
    extends: [
      'eslint:recommended', // Règles recommandées par ESLint pour JavaScript
      'plugin:@typescript-eslint/recommended', // Règles recommandées pour TypeScript
      'plugin:@angular-eslint/recommended', // Règles recommandées pour Angular
    ],
    rules: {
      // Règles de base pour un projet TypeScript/Angular
      '@typescript-eslint/no-explicit-any': 'warn', // Avertissement lorsque 'any' est utilisé
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'app',
          style: 'kebab-case',
        },
      ], // Impose une convention pour les sélecteurs de composants Angular
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'app',
          style: 'camelCase',
        },
      ], // Convention pour les directives Angular
    },
  },
];

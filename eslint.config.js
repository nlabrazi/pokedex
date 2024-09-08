import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { FlatCompat } from '@eslint/eslintrc';
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin';
import angularEslintPlugin from '@angular-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';

// Convertir `import.meta.url` en chemin de fichier
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Compatibilité avec l'ancien système
const compat = new FlatCompat({
  baseDirectory: __dirname, // Chemin racine du projet
});

export default [
  {
    // Appliquer cette configuration à tous les fichiers TypeScript du projet
    files: ['src/**/*.ts'],
    languageOptions: {
      parser: typescriptParser, // Utiliser le parser TypeScript
      parserOptions: {
        project: './tsconfig.json', // Utiliser le fichier tsconfig.json pour les règles spécifiques au projet
      },
    },
    plugins: {
      '@typescript-eslint': typescriptEslintPlugin, // Plugin TypeScript ESLint
      '@angular-eslint': angularEslintPlugin, // Plugin Angular ESLint
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn', // Avertissement si le type "any" est utilisé
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'app',
          style: 'kebab-case',
        },
      ], // Règles pour le nommage des composants Angular
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'app',
          style: 'camelCase',
        },
      ], // Règles pour le nommage des directives Angular
    },
  },
];

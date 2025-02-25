// eslint.config.js
import { defineConfig } from 'eslint-define-config';
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginJsxA11y from 'eslint-plugin-jsx-a11y';
import babelParser from '@babel/eslint-parser';

export default defineConfig([
  {
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
        requireConfigFile: false,
      },
      globals: {
        window: 'readonly',
        document: 'readonly',
        process: 'readonly',
        React: 'readonly',
      },
    },
    plugins: {
      react: eslintPluginReact,
      'jsx-a11y': eslintPluginJsxA11y,
    },
    rules: {
      'react/prop-types': 'off',
      'no-unused-vars': 'warn',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'jsx-a11y/no-onchange': 'warn',
    },
  },
  {
    files: ['*.js', '*.jsx'],
    rules: {
      'react/jsx-uses-vars': 'error',
      'react/react-in-jsx-scope': 'error',
      'jsx-a11y/anchor-is-valid': 'error',
    },
  },
]);

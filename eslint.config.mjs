// import js from '@eslint/js';
// import globals from 'globals';
import stylistic from '@stylistic/eslint-plugin';
// import { FlatCompat } from 'eslint/config';

export default [
  {
    // files: ['**/*.{js,mjs,cjs}'],
    plugins: {
      '@stylistic': stylistic,
    },
    // extends: ['js/recommended'],
    rules: {
      '@stylistic/eol-last': ['error', 'always'],
      '@stylistic/indent': ['error', 2],
      '@stylistic/jsx-indent': 'error',
      '@stylistic/semi': 'error',
    },
  },
  // { files: ['**/*.js'], languageOptions: { sourceType: 'commonjs' } },
  // { files: ['**/*.{js,mjs,cjs}'], languageOptions: { globals: globals.node } },
];

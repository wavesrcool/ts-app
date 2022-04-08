module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  parserOptions: { ecmaVersion: 8 }, // async/await
  ignorePatterns: ['node_modules/*', '!.prettierrc.js'], // lint .prettierrc.js
  extends: ['eslint:recommended'],
  plugins: ['unused-imports'],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      settings: { react: { version: 'detect' } },
      env: {
        browser: true,
        node: true,
        es6: true,
      },
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'plugin:react-hooks/recommended',
      ],
      rules: {
        'no-unused-vars': ['error'],
        'unused-imports/no-unused-imports': ['error'],
        'unused-imports/no-unused-vars': [
          'warn',
          {
            vars: 'all',
            varsIgnorePattern: '^_',
            args: 'after-used',
            argsIgnorePattern: '^_',
          },
        ],

        'prettier/prettier': ['error', {}, { usePrettierrc: true }], // includes .prettierrc.js

        '@typescript-eslint/explicit-function-return-type': [
          'warn',
          {
            allowExpressions: true,
            allowConciseArrowFunctionExpressionsStartingWithVoid: true,
          },
        ],

        'sort-imports': [
          'error',
          {
            ignoreDeclarationSort: true,
          },
        ],
      },
    },
  ],
}

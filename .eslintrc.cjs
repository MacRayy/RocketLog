module.exports = {
  settings: {
    react: {
      version: 'detect'
    }
  },
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/typescript',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts', 'generated'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    'tsconfigRootDir': './',
    'project': './tsconfig.json',
    'sourceType': 'module'
  },
  plugins: ['react-refresh', 'prettier', 'import'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],

    'prettier/prettier': 'warn',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-inferrable-types': [
      'error',
      { 'ignoreProperties': true }
    ],
    'import/no-named-as-default-member': 'off',
    '@typescript-eslint/no-empty-interface': [
      'error',
      {
        'allowSingleExtends': true
      }
    ],
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        'vars': 'all',
        'args': 'after-used',
        'ignoreRestSiblings': true,
        'argsIgnorePattern': '^_'
      }
    ],
    '@typescript-eslint/no-misused-promises': ['error', { 'checksVoidReturn': false }],
    'import/no-extraneous-dependencies': [
      'off',
      {
        'devDependencies': false
      }
    ],
    'react/boolean-prop-naming': [
      'error',
      { 'rule': '^(is|has|should|can|are|have)[A-Z]([A-Za-z0-9]?)+' }
    ],
    'react/jsx-fragments': ['error', 'syntax'],
    'react/jsx-curly-brace-presence': ['error'],
    'react/jsx-curly-spacing': ['error'],
    'react/jsx-closing-bracket-location': ['error'],
    'react/jsx-closing-tag-location': ['error'],
    'react/jsx-tag-spacing': ['error'],
    'react/jsx-boolean-value': ['error'],
    'react/self-closing-comp': ['error'],
    'react/react-in-jsx-scope': 'off',
    'eol-last': ['error', 'always'],
    curly: ['error', 'all'],
    'import/newline-after-import': ['error'],
    'import/no-duplicates': ['error'],
    '@typescript-eslint/ban-ts-comment': [
      'error',
      { 'ts-expect-error': 'allow-with-description' }
    ],
    '@typescript-eslint/prefer-ts-expect-error': 'error',
    '@typescript-eslint/consistent-type-imports': [
      'warn',
      { 'prefer': 'type-imports' }
    ],
    '@typescript-eslint/consistent-type-exports': 'error',
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',
    '@typescript-eslint/no-unsafe-enum-comparison': 'error',
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/consistent-indexed-object-style': 'error',
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': 'warn',
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/prefer-function-type': 'error',
    'jsx-a11y/no-static-element-interactions': 'warn',
    'jsx-a11y/click-events-have-key-events': 'warn',
    'jsx-a11y/anchor-is-valid': 'warn',
    'jsx-a11y/no-autofocus': 'warn'
  },
}

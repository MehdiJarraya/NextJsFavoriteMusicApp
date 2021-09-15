module.exports = {
  root: true,
  extends: ['@acolorbright/eslint-config-react', 'prettier'],
  parser: 'babel-eslint',
  plugins: [
    'simple-import-sort',
    'prettier',
    'react',
    'react-hooks',
    'jsx-a11y',
  ],
  rules: {
    'no-restricted-syntax': 0,
    'no-use-before-define': 0,
    'no-useless-constructor': 0,
    'no-useless-escape': 1,
    'prettier/prettier': 2,
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'react-hooks/exhaustive-deps': 0,
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // Side effects
          ['^\\u0000'],
          // Packages:
          // 1. `react`-related packages
          // 2. `next`-related packages
          // 3. Third-party packages starting with `@` followed by a word character
          // 4. Third-party packages starting with a word character
          ['^react', '^@react', 'next', '^@\\w+(/.*|$)', '^\\w'],
          // Relative imports using `src`
          ['^.*/src/.*'],
          // Anything not matched in another group.
          ['^'],
          // Other relative imports
          ['^\\.'],
        ],
      },
    ],
    'simple-import-sort/exports': 'error',
    'sort-imports': 'off',
    'import/extensions': [1, 'never', { css: 'always' }],
    'import/first': 2,
    'import/newline-after-import': 2,
    'import/no-duplicates': 2,
    'import/no-unresolved': 0,
    'import/order': 0,
    'spaced-comment': [2, 'always', { markers: ['/'] }],
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        required: {
          some: ['nesting', 'id'],
        },
      },
    ],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        aspects: ['invalidHref'],
      },
    ],
  },
  env: {
    jest: true,
  },
};

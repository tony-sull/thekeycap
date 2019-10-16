module.exports = {
  root: true,
  extends: ['airbnb-base'],
  parserOptions: {
    sourceType: 'script',
  },
  env: {
    node: true,
  },
  plugins: ['svelte3'],
  rules: {
    'arrow-parens': 'off',
    'global-require': 'off',
    'no-param-reassign': ['error', { props: false }],
    'no-unused-vars': ['error', { varsIgnorePattern: '\\b_\\b' }],
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    semi: ['error', 'never'],
  },
  settings: {
    'svelte3/ignore-styles': attributes => true,
  },
  overrides: [
    {
      files: [
        'rollup.config.js',
        'postcss.config.js',
        'stylelint.config.js',
        'tailwind.config.js',
      ],
      parserOptions: {
        sourceType: 'module',
      },
    },
    {
      files: ['**/*.svelte'],
      processor: 'svelte3/svelte3',
    },
  ],
}

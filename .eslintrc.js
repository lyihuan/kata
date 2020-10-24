module.exports = {
  root: true,
  extends: [
    'eslint-config-ali',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
  ],
  parser: 'babel-eslint',
  rules: {
    'prettier/prettier': 'warn',
    'no-console': 'off',
    'import/no-dynamic-require': 'off',
    'global-require': 'off',
    'require-yield': 'off',
    'react/prop-types': 'off',
    'react/display-name': 'off',
  },
  plugins: ['prettier', 'react'],
  globals: {
    React: 'readable',
  },
};

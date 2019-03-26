// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here (error(2), warn(1), off(0)).
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development and not in production.
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
     // PEKO allows me to define variables without using them (error(2), warn(1), off(0)).
    'no-unused-vars': process.env.NODE_ENV === 'production' ? 2 : 0,
  }
}

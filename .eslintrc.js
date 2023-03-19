module.exports = {
  env: {
    browser: false,
    es2021: false,
  },
  extends: [],
  overrides: [],
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaVersion: 2015,
    sourceType: "module",
    requireConfigFile: false,
    babelOptions: {
      presets: ["@babel/preset-react"],
    },
  },
  plugins: [],
  rules: {},
};

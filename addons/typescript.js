module.exports = {
  extends: [
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",
  ],
  plugins: ["@typescript-eslint"],
  rules: {
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
  },
  parser: "@typescript-eslint/parser",
};

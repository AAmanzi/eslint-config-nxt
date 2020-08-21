module.exports = {
  extends: [
    "airbnb-base",
    "plugin:jest/all",
    "plugin:import/errors",
    "plugin:import/warnings",
  ],
  plugins: ["jest"],
  root: true,
  globals: {},
  rules: {
    "import/no-unresolved": [2, { commonjs: true, amd: true }],
    "import/prefer-default-export": "off",
    "max-len": [
      "error",
      {
        code: 120,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
        ],
        "newlines-between": "always",
      },
    ],
    "import/no-extraneous-dependencies": "off",
    "import/extensions": "off",
    "no-plusplus": "off",
    "implicit-arrow-linebreak": "off",
    "operator-linebreak": "off",
    "no-confusing-arrow": "off",
    "arrow-body-style": "off",
    "function-paren-newline": "off",
    "no-restricted-syntax": "off",
    "object-curly-newline": "off",
    "no-await-in-loop": "off",
  },
  env: {},
  overrides: [],
};

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    // Needed, otherwise module and __dirname are not recognized by no-undef rule
    browser: true,
    amd: true,
    node: true,
  },
  root: true,
  plugins: ["import", "@typescript-eslint"],
  rules: {
    // turn on errors for missing imports
    "import/no-unresolved": "error",
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx", ".js", ".jsx"],
    },
    "import/resolver": {
      typescript: {
        project: "./tsconfig.json",
      },
    },
  },
};

/** @type {import("eslint").Linter.Config} */
module.exports = {
  "extends": "next/core-web-vitals",
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
    ecmaFeatures: {
      jsx: true,
    },
  },
  "plugins": ["import"],
  "rules": {
    // turn on errors for missing imports
    "import/no-unresolved": "error"
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    'import/resolver': {
      typescript: {
        project: './tsconfig.json',
      },
    },
  }
}

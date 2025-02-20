module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:@next/next/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["import", "react", "@typescript-eslint"],

  rules: {
    //yoinked from TLA, CreativeLabs, Opensource starters
    // A few more opinions in addition to extensions

    // As per React 17 changes! https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html
    "react/react-in-jsx-scope": "off",
    "react/jsx-uses-react": "off",

    "linebreak-style": ["error", "unix"],

    "@typescript-eslint/no-require-imports": ["error"],

    "@typescript-eslint/no-non-null-assertion": "off",

    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],

    // Style
    quotes: ["error", "single", { avoidEscape: true }],

    // Require all imported dependencies are actually declared in package.json
    "import/no-extraneous-dependencies": [
      "error",
      {
        optionalDependencies: false, // Disallow importing optional dependencies (those shouldn't be in use in the project)
        peerDependencies: false, // Disallow importing peer dependencies (that aren't also direct dependencies)
      },
    ],

    // Require all imported libraries actually resolve (!!required for import/no-extraneous-dependencies to work!!)
    "import/no-unresolved": ["error"],

    // Require an ordering on all imports
    "import/order": [
      "warn",
      {
        groups: ["builtin", "external"],
        alphabetize: { order: "asc", caseInsensitive: true },
      },
    ],

    // Cannot import from the same module twice
    "no-duplicate-imports": ["error"],

    // Cannot shadow names
    // note you must disable the base rule as it can report incorrect errors
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["error"],

    // Required spacing in property declarations (copied from TSLint, defaults are good)
    "key-spacing": ["error"],

    // Require semicolons
    semi: ["error", "always"],

    // Don't unnecessarily quote properties
    "quote-props": ["error", "consistent-as-needed"],

    // No multiple empty lines
    "no-multiple-empty-lines": ["error"],

    // Max line lengths
    "max-len": [
      "error",
      {
        code: 120,
        ignoreUrls: true, // Most common reason to disable it
        ignoreStrings: true, // These are not fantastic but necessary for error messages
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],

    // One of the easiest mistakes to make
    "@typescript-eslint/no-floating-promises": ["error"],

    // Don't leave log statements littering the premises!
    "no-console": ["error", { allow: ["info", "warn", "error"] }],

    // Useless diff results
    "no-trailing-spaces": ["error"],

    // Must use foo.bar instead of foo['bar'] if possible
    "dot-notation": ["error"],

    // Are you sure | is not a typo for || ?
    "no-bitwise": ["error"],

    // Member ordering
    "@typescript-eslint/member-ordering": [
      "error",
      {
        default: [
          "public-static-field",
          "public-static-method",
          "protected-static-field",
          "protected-static-method",
          "private-static-field",
          "private-static-method",

          "field",

          // Constructors
          "constructor", // = ['public-constructor', 'protected-constructor', 'private-constructor']

          // Methods
          "method",
        ],
      },
    ],
  },
};

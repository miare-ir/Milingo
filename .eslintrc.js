module.exports = {
  // TODO add ordered imports https://github.com/benmosher/eslint-plugin-import
  "env": {
    "browser": true,
    "node": false
  },
  "ignorePatterns": ["node_modules", "types", "dist", "docs", "stylelint.config.js"],
  "plugins": [
    "@typescript-eslint",
    "jsdoc"
  ],
  "extends": [
    "eslint:recommended",

    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",

    "plugin:react/recommended",

    "prettier/@typescript-eslint",
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "tsconfigRootDir": __dirname,
    "project": "tsconfig.json",
    "sourceType": "module"
  },
  "rules": {
    "@typescript-eslint/ban-types": [
      "error",
      {
        "types": {
          "Object": {
            "message": "Avoid using the `Object` type. Did you mean `object`?"
          },
          "Function": {
            "message": "Avoid using the `Function` type. Prefer a specific function type, like `() => void`."
          },
          "Boolean": {
            "message": "Avoid using the `Boolean` type. Did you mean `boolean`?"
          },
          "Number": {
            "message": "Avoid using the `Number` type. Did you mean `number`?"
          },
          "String": {
            "message": "Avoid using the `String` type. Did you mean `string`?"
          },
          "Symbol": {
            "message": "Avoid using the `Symbol` type. Did you mean `symbol`?"
          }
        }
      }
    ],
    "@typescript-eslint/dot-notation": "error",
    "@typescript-eslint/member-delimiter-style": [
      "off",
      {
        "multiline": {
          "delimiter": "none",
          "requireLast": true
        },
        "singleline": {
          "delimiter": "semi",
          "requireLast": false
        }
      }
    ],
    "@typescript-eslint/member-ordering": "error",
    "@typescript-eslint/no-unused-expressions": "error",
    "@typescript-eslint/semi": [
      "off",
      null
    ],
    "arrow-body-style": "error",
    "arrow-parens": [
      "off",
      "always"
    ],
    "brace-style": [
      "error",
      "1tbs"
    ],
    "camelcase": "off",
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/naming-convention": "error",
    "no-underscore-dangle": "off",
    "@typescript-eslint/no-misused-promises": "off", // Turned off only because of rule's poor performance
    "@typescript-eslint/no-unused-vars": ["error", {
      "ignoreRestSiblings": true,
      "args": "none"
    }],
    "curly": "error",
    "eol-last": "error",
    "eqeqeq": [
      "error",
      "smart"
    ],
    "guard-for-in": "error",
    "id-blacklist": [
      "error",
      "Number",
      "number",
      "String",
      "string",
      "Boolean",
      "boolean",
      "Undefined",
    ],
    "id-match": "error",
    "jsdoc/check-alignment": "error",
    "jsdoc/check-indentation": "error",
    "jsdoc/newline-after-description": "error",
    "no-bitwise": "error",
    "no-caller": "error",
    "no-console": [
      "error",
      {
        "allow": [
          "warn",
          "dir",
          "timeLog",
          "assert",
          "clear",
          "count",
          "countReset",
          "group",
          "groupEnd",
          "table",
          "dirxml",
          "error",
          "groupCollapsed",
          "Console",
          "profile",
          "profileEnd",
          "timeStamp",
          "context"
        ]
      }
    ],
    "no-empty": "off",
    "@typescript-eslint/no-empty-function": ["error", {
      "allow": ["arrowFunctions"]
    }],
    "no-eval": "error",
    "no-new-wrappers": "error",
    "no-shadow": [
      "error",
      {
        "hoist": "all"
      }
    ],
    "radix": "error",
    "space-in-parens": [
      "off",
      "never"
    ],
    "spaced-comment": [
      "error",
      "always",
      {
        "markers": [
          "/"
        ]
      }
    ],
    "@typescript-eslint/explicit-function-return-type": ["warn", {
      "allowExpressions": true
    }]
  },
  "overrides": [{
    "files": ["*.stories.tsx"],
    "rules": {
      "jsx-a11y/anchor-is-valid": "off",
      "jsx-a11y/alt-text": "off"
    }
  }, {
    "files": ["*fixtures*"],
    "rules": {
      "camelcase": "off"
    }
  }, {
    "files": ["*spec*", "*test*"],
    "rules": {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-var-requires": "off"
    }
  }],
  "settings": {
    "react": {
      "version": "detect"
    }
  }
};

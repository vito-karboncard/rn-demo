module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "react-native/react-native": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "react-native",
        "@typescript-eslint"
    ],
    "extends": ["plugin:react/jsx-runtime", "prettier"],
    "rules": {
        "react/self-closing-comp": ["warn", {
            "component": true,
          }],
        "react/jsx-curly-brace-presence": [
            "warn",
            {
                "props": "never",
                "children": "never"
            }
        ]
    }
};

import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

/** @type {import('eslint').Linter.Config[]} */
export default [
    { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    eslintPluginPrettierRecommended,
    {
        rules: {
            'react/react-in-jsx-scope': 0,
            'prettier/prettier': [
                'error',
                {
                    singleQuote: true,
                    trailingComma: 'es5',
                    tabWidth: 4,
                    semi: true,
                },
            ],
        },
    },
];

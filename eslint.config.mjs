import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';


export default [
  {files: ['**/*.{js,mjs,cjs,ts}']},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {'rules': {
    'quotes': ['error', 'single'],
    'lines-around-comment': 'error',
    'max-len': [
      'error', {
        'code': 80,
        'ignoreComments': true,
        'ignoreUrls': true,
        'ignoreStrings': true,
        'ignorePattern': '^\\s*(import|export)\\s+.*$'
      }
  ],
    'arrow-body-style': ['error', 'as-needed'],
  }}
];

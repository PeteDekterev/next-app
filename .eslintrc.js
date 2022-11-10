module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'next/core-web-vitals'
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: '6',
    sourceType: 'module',
    ecmaFeatures: {
      modules: true
    }
  },
  plugins: [
    'react'
  ],
  rules: {
    'react/prop-types': 'off',
    'react/no-unescaped-entities': 'off',
    'react/react-in-jsx-scope': 'off',
    '@next/next/no-img-element': 'off',
    'react-hooks/exhaustive-deps': 'off',
    quotes: [
      'error',
      'single'
    ],
    'jsx-quotes': [
      'error',
      'prefer-single'
    ],
    semi: [
      'error',
      'always'
    ],
    'object-curly-spacing': [
      'warn',
      'never'
    ],
    'arrow-spacing': 'warn',
    'quote-props': [
      'warn',
      'as-needed'
    ],
    'arrow-body-style': [
      'error',
      'as-needed',
      {
        requireReturnForObjectLiteral: false
      }
    ],
    eqeqeq: [
      'error',
      'always'
    ],
    'no-console': [
      'error',
      {
        allow: [
          'warn',
          'error'
        ]
      }
    ],
    'no-else-return': 'error',
    'no-lonely-if': 'error',
    'no-useless-computed-key': 'error',
    'object-shorthand': 'error',
    'operator-assignment': [
      'error',
      'always'
    ],
    'prefer-arrow-callback': [
      'error',
      {
        allowUnboundThis: false
      }
    ],
    'prefer-template': 'error',
    'comma-dangle': [
      'error',
      'never'
    ],
    'no-extra-parens': [
      'error',
      'all',
      {
        nestedBinaryExpressions: false,
        ignoreJSX: 'all'
      }
    ],
    'no-empty': 'off',
    'no-duplicate-imports': 'error'
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};
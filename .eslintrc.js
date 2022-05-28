module.exports = {
  // https://eslint.org/docs/user-guide/configuring#configuration-cascading-and-hierarchy
  // This option interrupts the configuration hierarchy at this file
  // Remove this if you have an higher level ESLint config file (it usually happens into a monorepos)
  root: true,

  parserOptions: {
    ecmaVersion: '2021', // Allows for the parsing of modern ECMAScript features
  },

  // env: {
  //   node: true,
  //   browser: true,
  //   'vue/setup-compiler-macros': true,
  // },

  // Rules order is important, please avoid shuffling them
  extends: [
    // Base ESLint recommended rules
    // "eslint:recommended",

    // Uncomment any of the lines below to choose desired strictness,
    // but leave only one uncommented!
    // See https://eslint.vuejs.org/rules/#available-rules
    'plugin:vue/vue3-essential', // Priority A: Essential (Error Prevention)
    'plugin:vue/vue3-strongly-recommended', // Priority B: Strongly Recommended (Improving Readability)
    // 'plugin:vue/vue3-recommended', // Priority C: Recommended (Minimizing Arbitrary Choices and Cognitive Overhead)

    // https://github.com/prettier/eslint-config-prettier#installation
    // usage with Prettier, provided by 'eslint-config-prettier'.
    'prettier',
    // "plugin:prettier/recommended",
  ],

  plugins: [
    // https://eslint.vuejs.org/user-guide/#why-doesn-t-it-work-on-vue-files
    // required to lint *.vue files
    'vue',

    // https://github.com/typescript-eslint/typescript-eslint/issues/389#issuecomment-509292674
    // Prettier has not been included as plugin to avoid performance impact
    // add it as an extension for your IDE
  ],

  globals: {
    ga: 'readonly', // Google Analytics
    process: 'readonly',
    chrome: 'readonly',
  },

  // add your custom rules here
  rules: {
    strict: 'off',
    'prefer-promise-reject-errors': 'off',

    // allow debugger during development only
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/require-v-for-key':
      process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'vue/no-unused-vars':
      process.env.NODE_ENV === 'production' ? 'off' : 'warn',
    'vue/valid-v-for': process.env.NODE_ENV === 'production' ? 'off' : 'warn',
    'vue/no-unused-components':
      process.env.NODE_ENV === 'production' ? 'off' : 'off',

    'vue/multi-word-component-names': 'off',
    'vue/require-prop-types': 'off',
    'vue/require-default-prop': 'off',
    'vue/require-prop-type-constructor': 'warn',
  },
}

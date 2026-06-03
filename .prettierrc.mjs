// .prettierrc.mjs
/** @type {import("prettier").Config} */
export default {
  semi: false,
  printWidth: 80,
  bracketSpacing: true,
  singleQuote: true,
  useTabs: false,
  tabWidth: 2,
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
}

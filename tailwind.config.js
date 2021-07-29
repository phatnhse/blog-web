module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
    nightwind: {
      typography: true,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require("nightwind")]
}
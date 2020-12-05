const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: { 
    extend: {
      colors: {
        teal: colors.teal
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

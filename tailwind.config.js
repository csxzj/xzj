/* eslint-disable @typescript-eslint/no-var-requires */
const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './index.html',
      './src/**/*.vue',
      './src/**/*.md',
      './src/**/*.js',
      './src/**/*.ts',
    ],
  },
  variants: {
    cursor: ['responsive', 'disabled'],
    backgroundColor: ['dark', 'hover', 'disabled'],
    borderColor: ['dark', 'active', 'focus', 'disabled'],
    textColor: ['dark', 'hover', 'active', 'disabled'],
    opacity: ['dark', 'hover', 'active', 'focus', 'disabled'],
  },
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        teal: colors.teal,
      },
      opacity: {
        10: '0.1',
        50: '0.5',
        85: '0.85',
      },
    }
  },
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        danger: '#c0392b',
        success: '#1a7f4b',
        brand: {
          DEFAULT: '#9c224d',
          light: '#e04477',
          dark: '#7c1a3c',
          50: '#fdf2f7',
          100: '#fce7f0',
          200: '#fbcfdf',
          300: '#f7a7c4',
          400: '#f0729f',
          500: '#e04477',
          600: '#c1275b',
          700: '#9f1e4a',
          800: '#851b40',
          900: '#711b3a',
        },
      },
    },
  },
  plugins: [],
};
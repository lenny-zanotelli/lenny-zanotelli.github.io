/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  darkMode: 'class',
  mode: 'jit',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        md: '3rem',
        lg: '4rem',
      },
    },
    extend: {
      colors: {
        dark: {
          appBg: '#14121F',
          cardBg: '#1E1523',
          buttonBg: '#291F43',
          text: '#BAA7FF',
          hover: '#33255B',
          border: '#473876',
          tagBg: '',
          tagHover: '',
        },
        light: {
          appBg: '#FEFCFE',
          cardBg: '#FBF7FE',
          buttonBg: '#F4F0FE',
          text: '#6550B9',
          hover: '#EBE4FF',
          border: '#E0C4F4',
          tagBg: '',
          tagHover: '',
        },

      }
    },
  },
  plugins: [],
}
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
          appBg: '#201320',
          cardBg: '#201320',
          buttonBg: '#351A35',
          text: '#F4D4F4',
          hover: '#451D47',
          border: '#5E3061',
        },
        light: {
          appBg: '#FDF7FD',
          cardBg: '#FDF7FD',
          buttonBg: '#FBEBFB',
          text: '#53195D',
          hover: '#F7DEF8',
          border: '#E9C2EC',

        },

      }
    },
  },
  plugins: [],
}
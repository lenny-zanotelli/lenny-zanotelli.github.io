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
          appBg: '#0B161A',
          cardBg: '#101B20',
          buttonBg: '#082C36',
          text: '#B6ECF7',
          hover: '#003848',
          border: '#045468',
        },
        light: {
          appBg: '#FAFDFE',
          cardBg: '#F2FAFB',
          buttonBg: '#DEF7F9',
          text: '#0D3C48',
          hover: '#003848',
          border: '#9DDDE7',
        },

      }
    },
  },
  plugins: [],
}
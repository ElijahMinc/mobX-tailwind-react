/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ["./src/**/*.{js, jsx}"],
  theme: {
    // colors: {},
    extend: {
      textColor: {
        primary: 'red'
      },
      spacing: {
        DEFAULT: '0.12rem'
      },

      transitionTimingFunction: {
        DEFAULT: 'easy-in-out'
      },
      transitionDuration: {
        DEFAULT: '200ms'
      }
    },
  },
  plugins: [
   plugin(({ addUtilities, addComponents,  theme}) => {
    addComponents({
      '.btn-primary': {
        backgroundColor: theme('colors.orange.500'),
        color: 'white',
        padding: '10px 0',
        display: 'block',
        fontSize: '18px',
        fontWeight: 'bold',
        width: '100%',
  
        '&:hover': {
          backgroundColor: theme('colors.orange.600'),
        }
      }
    })
   })
   
  ],// скачиваем с оф сайта
  
} 

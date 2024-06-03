/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newutils = {
        '.scrollbar-custom': {
          '&::-webkit-scrollbar': {
            height : '17px',
          },
          '&::-webkit-scrollbar-track': {
            background : 'rgb(39,39,42)',
            borderRadius : '20px'
          },
          '&::-webkit-scrollbar-thumb': {
            "background-color" : 'white',
            "border-radius" : '20px'
          }
        },
        '.scrollbar-none':{
          '&::-webkit-scrollbar':{
            display : 'none'
          }
        }
      }
      addUtilities(newutils, ['responsive', 'hover']);
    }
  ],
}


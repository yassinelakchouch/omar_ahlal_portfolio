
/** @type {import('tailwindcss').Config} */


module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        darkblue: '#243b98',
        blue:'#28527A',
        teal:'#8AC4D0',
        yellow:'#F4D160',
        pink:'#F73859',
      },
      fontFamily:{
        butler:['Butler','sans-serif'],
        roboto:['Roboto Slab','serif'],
        crimson:['Crimson Text', 'serif']
      }
    },
  },
  plugins: [],
}

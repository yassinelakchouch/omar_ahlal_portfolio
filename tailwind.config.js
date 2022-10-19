/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        darkblue: '#243b98'
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

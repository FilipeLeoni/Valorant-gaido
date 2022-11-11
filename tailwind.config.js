/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Ubuntu'],
        'SansPro': ['SourceSansPro']
      },
      colors: {
        pink: '#FD4556',
        gray: {
          DEFAULT:'#ECE8E1',
          lighter: '#D9D9D9',
          light: '#7A827C',
          dark: '#383E3A',
          darker: '#1E1E1E',
        },
        blue: '#101720'
      },
      screens: {
        'sm': {'max' : '640px'},
        'md': {'max' : '767px'},
        'lg': {'max' : '1024px'},
        'xl': {'max' : '1280px'},
      },
    },
  },
  plugins: [  
  require("tailwindcss-radix")(),],
}

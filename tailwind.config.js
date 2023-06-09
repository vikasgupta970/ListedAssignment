/** @type {import('tailwindcss').Config} */



module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Montserrat: ['Montserrat','sans-serif'],
        Lato:['Lato', 'sans-serif'],
        OpenSans:['Open Sans', 'sans-serif'],
      },
      colors:{
        Whitesmoke: '#F5F5F5',
        btn: '#858585',
        DarkWhiteSmoke:'#EAEAEA',
        link:'#346BD4',
        card:'#DDEFE0',
        card2:'#F4ECDD',
        card3:'#EFDADA',
        card4:'#DEE0EF',
        grey:'#666666',
        lightgrey:'#999999',
      }
    },
  },
  plugins: [],
}
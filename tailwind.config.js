/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primary:'#FF6363'
      },
      fontSize:{
        mammoth:['8rem']
      },
      fontFamily:{
        Lobster:['Lobster'],
        LilitaOne:['Lilita One']
      }
    },
  },
  plugins: [],
}


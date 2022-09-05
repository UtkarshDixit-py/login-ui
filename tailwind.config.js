/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: { 
    extend: {
      colors:{
        primary : '#194BFB',
        darkBg : '#1A202C'
      },
      fontSize: {
        m : '40px'
      }
    },
  },
  plugins: [],
}

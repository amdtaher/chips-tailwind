/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: { 
      fontFamily: { 
        "poppins": ['poppins', 'sans-serif'], 
        "titanOne": ['Titan One', 'sans-serif'],
      },
      colors:{
        primary: 'hsl(170, 90%, 34%)',
        primaryDark: 'hsl(170, 100%, 28%)',
        primaryDarken: 'hsl(170, 100%, 23%)',
        secondary: 'hsl(45, 100%, 52%)',
        secondaryDark: 'hsl(45, 100%, 20%)',
        white: 'hsl(0, 0%, 100%)',
        dropShadow: 'drop-shadow(0 12px 24px hsla(0, 0%, 0%, 0.4))',
      },
  }, 
  },
  plugins: [],
}

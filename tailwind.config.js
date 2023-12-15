/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['MuseoSans', 'sans-serif']
      },
      colors: {
        gray: {
          navbar: '#565A5D',
          navbarHover: '#828282',
          dark: "#373a3c"
        }
      }
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}


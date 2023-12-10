/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['MuseoSans', 'sans-serif']
      }
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}


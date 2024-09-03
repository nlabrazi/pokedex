/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brown: {
          500: '#A16207',
        },
      },
    },
  },
  plugins: [],
}

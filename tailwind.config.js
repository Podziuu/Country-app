/** @type {import('tailwindcss').Config} */



module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-primary': '#2b3945',
        'dark-secondary': '#202c37',
        'light-text': '#111517',
        'light-primary': '#fafafa',
        'light-secondary': '#858585',
      },
      fontFamily: {
        'body': 'Poppins'
      }
    },
  },
  plugins: [],
}

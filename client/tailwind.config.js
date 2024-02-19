/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [],
   purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        colors: {
          primary: '#52B788',
          secondary: {
            100: "#B2D3A8",
            200:'#498467'
          }
        }
      },
    },
    variants: {
      extend: {},
    },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}


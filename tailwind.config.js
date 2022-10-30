/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./docs/**/*.{html, js}",
    "./*.{html, js}"
  ],
  theme: {
    extend: {
      screens: {
        sm: '480px',
      },
      colors: {
        lightPink: '#F8D0CE',
        mutedPink: '#D57A7D',
        almostWhite: '#FFFCFA'
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
        nunitosans: ['Nunito Sans', 'sans-serif']
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      }
    },
  },
  plugins: [],
}

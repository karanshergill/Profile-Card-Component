/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Primary-Dark-Cyan': 'hsl(185, 75%, 39%)',
        'Primary-Very-Dark-Desaturated-Blue': 'hsl(229, 23%, 23%)',
        'Primary-Dark-Grayish-Blue': 'hsl(227, 10%, 46%)',
        'Neutral-Dark-Gray': 'hsl(0, 0%, 59%)'
      },
      fontFamily: {
        'Kumbh': ['Kumbh Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}


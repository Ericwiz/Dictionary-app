/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'max-xs': {'max': '490px'},
      // => @media (max-width: 639px) { ... }
      }
    },
  },
  plugins: [
    require('daisyui')
  ],

  daisyui: {
    themes: ["light", "dark", 'synthwave', 'cyberpunk', 'night', 'coffee', 'luxury', 'retro'],
  },
}

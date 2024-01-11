/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dancing:['Dancing Script', 'cursive'],
      },
       screens: {
        'dl': '1440px',
        // => @media (min-width: 1280px) { ... }
        '2dl': '2560px',
        // => @media (min-width: 1280px) { ... }
     },
   },
  },
  plugins: [],
}


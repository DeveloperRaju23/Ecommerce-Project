/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        headingColor:"#274C5B",
        yellowColor:"#EFD372",
        grayColor:"#D4D4D4",
        whiteColor:"#F9F8F8",
        blackColor:"#525C60",
        hasaColor:"#EFF6F1",
      },
      fontFamily: {
        dancingFont: ['Great Vibes', 'cursive'],
      },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        customBlue: 'rgba(70, 46, 106, 1)',
        lightBlue: 'rgba(69, 143, 246, 1)',
        titleBlue: 'rgba(60, 86, 123, 1)',
        descriptionblue: 'rgba(147, 193, 249, 1)',
      }
    },
  },
  plugins: [],
}
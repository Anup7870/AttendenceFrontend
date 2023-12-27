/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'nunito': ['Nunito', 'sans-serif'],
    },
    extend: {
      height:{
        main: 'calc(100vh - 48px)'
      }
    },
  },
  plugins: [],
}
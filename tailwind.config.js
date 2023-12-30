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
      boxShadow: {
        sha:'10px -1px 19px -14px rgba(0,0,0,0.75)'
      },
      height:{
        main: 'calc(100vh - 48px)'
      }
    },
  },
  plugins: [],
}
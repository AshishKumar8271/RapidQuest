/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'xl' : '0px 0px 15px -4px gray',
        'input' : '0px 2px #63c9f3',
      }
    },
  },
  plugins: [],
}
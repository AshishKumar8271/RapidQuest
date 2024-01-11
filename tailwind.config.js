/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      boxShadow: {
        'xl' : '0px 0px 16px #d1cfcf',
        'input' : '0px 2px #b6f5fa',
      }
    },
  },
  plugins: [],
}
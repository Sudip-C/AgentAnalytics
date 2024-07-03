/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'lg': '0 35px 60px -15px rgba(0, 0, 0,0.1)',
      },
      colors: {
        'body': '#0F172A',
        'navbar':'#14253C'
      },
    },
  },
  plugins: [],
}
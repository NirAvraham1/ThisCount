/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        'thiscount-blue-dark': '#2B4A7D',
        'thiscount-blue-primary': '#3B82F6',
        'thiscount-orange': '#D97706',
        'thiscount-gray-light': '#F8F9FA',
        'thiscount-text-primary': '#2B3F61'
      },
      boxShadow: {
        'card': '0 10px 40px -10px rgba(121, 159, 237, 0.4)',
      }
    },
  },
  plugins: [],
}
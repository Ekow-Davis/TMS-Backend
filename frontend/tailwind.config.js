/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#ced0f2',
        'custom-purple': '#21266a'
      },
      transitionProperty: {
        'width': 'width',
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#8a90e5',
        'custom-purple': '#30cfcf',
        'custom-heading': '#21266A',
        "custom-hover-teal": "#aeefef"
      },
      transitionProperty: {
        'width': 'width',
      }
    },
  },
  plugins: [],
}


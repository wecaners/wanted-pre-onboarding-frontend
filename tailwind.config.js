/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'global-background': 'url("./assets/global-background.jpeg")'
      }
    }
  },
  plugins: []
};

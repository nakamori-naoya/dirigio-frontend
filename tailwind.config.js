const viewHeights = {}

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      tablet: '640px',

      laptop: '1024px',

      desktop: '1280px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  height: {
    '1/4-screen': '25vh',
    '1/2-screen': '50vh',
    '3/4-screen': '75vh',
    '4/5-screen': '80vh',
  },
}

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors:{
      black:'#000000',
      gray:'#DDDDDD',
      white:'#fff',
      blue:'#30475E'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

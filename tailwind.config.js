module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'nittai_black': '#222831',
        'nittai_grey': '#393E46',
        'nittai_teal_thin' : '#8fecf3',
        'nittai_teal': '#00ADB5',
        'nittai_teal_strong' : '#014c4e',
        'nittai_whitegrey': '#EEEEEE',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
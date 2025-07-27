const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
  
    container: {
      padding: {
        DEFAULT: '30px',
        lg: '0',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1536px',
      xxxl: '2100px'
    },
    extend: {
      fontFamily: {
        primary: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: '#222222',
        secondary: '#F5E6E0',
      },
     
    },
  },
  plugins: [
    require('tailwind-animatecss')
  ],
};

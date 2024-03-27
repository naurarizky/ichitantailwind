/** @type {import('tailwindcss').Config} */
// membuat konfigurasi shortcut/class baru
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      padding: {
        DEFAULT: '15px'
      }
    },
    screens: {
      sm:'640px',
      md:'768px',
      lg:'960px',
      xl:'1330px',
    },
    extend: {
      colors: {
        primary:'#1E1E1E',
        secondary:'#FAFAFA',
        accent: {
          DEFAULT: '#1E1E1E',
          secondary: '#91653D',
          tertiary: '#889F6F',
        },
        grey: '#e8f0f1',
      },
      fontFamily: {
        primary: 'Poppins',
      },
      boxShadow: {
        custom1: '0px 2px 40px 0px rgba(8, 70, 78, 0.08)',
        custom2: '0px 2px 40px 0px rgba(8, 73, 81, 0.06)',
      },
      backgroundImage: {
        imaage: 'url(../../assets/img/hero/img-header.png)',
        services: 'url(../../assets/img/services/bg.svg)',
        testimonials: 'url(../../assets/img/testimonials/bg.svg)',
        departments: 'url(../../assets/img/departments/bg.svg)',
        quoteLeft: 'url(../../assets/icons/testimonials/quote-left.svg)',
        quoteRight: 'url(../../assets/icons/testimonials/quote-right.svg)',
      },
    },
  },
  plugins: [],
}
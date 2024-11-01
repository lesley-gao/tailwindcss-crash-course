/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      fontFamily: {
        caveat: ['Caveat', 'Sans-setif'],
        lato: ['Lato', 'Sans-serif']
      },
      colors: {
        lavender: {
          default: '#cbcef9',
          '50': '#f0f1fd',
          '100': '#e3e6fc',
          '200': '#cbcef9',
          '300': '#adaff4',
          '400': '#908ced',
          '500': '#7e70e4',
          '600': '#6e54d7',
          '700': '#5e45bd',
          '800': '#4d3a99',
          '900': '#41357a',
          '950': '#271f47',
        },
        night: {
          default: '#0D1120',
          50: '#171E2C',
          500: '#0D1120',
        }
      }
    },
  },
  plugins: [],
}
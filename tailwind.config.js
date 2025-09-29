/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        app: {
          principal: '#0D121F',
          secondary: '#7C5CFC',
          gray: '#1A202C',
          grayText: '#596780'
        }
      },
      fontFamily: {
        Jakarta: ['Plus Jakarta Sans']
      },
      lineHeight: {
        'extra-loose': '2.5',
        '12': '3rem',
      }
    },
  },
  plugins: [],
}


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
          principal: '#003459',
          principalLight: '#002A48',
          secondary: '#F7DBA7',
          secondaryLight: '#FCEED5',
          gray: '#1A202C',
          grayText: '#596780',
          red: '#FF564F',
          green: '#34C759',
          orange: '#FF912C',
          blue: '#00A7E7',
          neutral: '#00171F',
          neutral80: '#242B33'

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


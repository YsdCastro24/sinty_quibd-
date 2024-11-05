const animations = require('@midudev/tailwind-animations')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      rotate: {
        '-3': '-3deg',
      },
    },
  },
  plugins: [animations], 
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist:[
    {
      pattern: /(from|to)-(green|blue|gray)-(400|700)/
    }
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

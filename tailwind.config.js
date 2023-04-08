/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/tailwind-datepicker-react/dist/**/*.js",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: "Inter"
      },
      colors: {
        'dark1': '#0D0E12',
        'dark2': '#0E1117',
        'dark3': '#1F232D',
        "bd": '#232830',
        'bw': '#E5E7EB',
        'blue1': '#3670FF',
        'blue2': '#DCE3EE',
        // 'dark4': '',
      },
      screens: {
        'sm': {'max':'576px'}
      },
      transitionProperty: {
        "height": "height",
        "width": "width"
      }
    },
    transitionProperty: {
      "height": "height",
      "width": "width"
    }
  },
  plugins: [
    require("flowbite/plugin")
  ],
  darkMode: 'class',
}
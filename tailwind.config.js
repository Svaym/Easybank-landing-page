/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens : {
      "xxl" : { max: "1400px" },
      "xl" : { max: "1200px" },
      "lg" : { max: "992px" },
      "md" : { max: "768px" },
      "sm" : { max: "576px" },
      "xs" : { max: "450px" },
      "xxs" : { max: "375px" },
    },
    extend: {
      colors: {
        'lime': '#31d35c',
        'cyan': '#2bb7da',
      },
      fontFamily: {
        'sans': ['Public Sans', 'sans-serif'],
      },
      keyframes: {
        'fade-in': {
          from: { opacity: 0 },
          to: { opacity: 1 },
        }
      },
      animation: {
        fade: 'fade-in .4s ease-in-out',
      },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: 'jit',
  theme: {
    extend: {
      colors:{
        blue:"#2CBCE9",
        red:"#DC4492",
        yellow:"#FTCC49",
        grey:"#ededed",
        "deep-blue":"#010026",
        "dark-grey":"#757575",
        "opaque-black":"rgba(0,0,0,0.35"
      },
    },
  },
  plugins: [],
}

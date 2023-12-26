/* @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./dist/**/*.html"],
  theme: {
    extend: {
      colors: {
        "primary": "#4338CA",
        "secondary": "#67E8F9"
      },
      fontFamily: {
        cera: ["cerapro-bold", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
}


/* @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./dist/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        cera: ["cerapro-bold", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
}


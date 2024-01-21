/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        grayBg: "#BCBCBC",
        mainBg: "#EEEEEE",
        primary: "#D60E37",
        secondary: "#5F71DE",
        green: "#26c95d",
      },
    },
  },
  plugins: [],
};

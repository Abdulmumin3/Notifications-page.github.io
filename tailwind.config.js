/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "v-light-grayish-blue": "hsl(210, 60%, 98%)",
        white: "hsl(0, 0%, 100%)",
        "light-grayish-blue-1": "hsl(211, 68%, 94%)",
        "light-grayish-blue-2": "hsl(205, 33%, 90%)",
        "grayish-blue": "hsl(219, 14%, 63%)",
        "dark-grayish-blue": "hsl(219, 12%, 42%)",
        "v-dark-blue": "hsl(224, 21%, 14%)",
        "attrib-color": "hsl(228, 45%, 44%)",
      },
    },
  },
  plugins: [],
};

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Epilogue", "sans-serif;"],
      },
      colors: {
        primary: {
          color: "rgba(29, 192, 113, 1)",
        },
        secondary: {
          color: "rgba(111, 73, 253, 1)",
        },
        dark: {
          color: "rgba(19, 19, 26, 1)",
        },
        neutral: {
          text_1: "rgba(58, 58, 67, 1)",
          text_2: "rgba(75, 82, 100, 1)",
          text_3: "rgba(128, 129, 145, 1)",
          text_4: "rgba(162, 162, 168, 1)",
          text_5: "rgba(178, 179, 189, 1)",
        },
      },
    },
  },
  plugins: [],
};

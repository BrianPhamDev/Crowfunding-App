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
        text: {
          1: "rgba(58, 58, 67, 1)",
          2: "rgba(75, 82, 100, 1)",
          3: "rgba(128, 129, 145, 1)",
          4: "rgba(178, 179, 189, 1)",
        },
        icon: {
          color: "rgba(162, 162, 168, 1)",
        },
      },
    },
  },
  plugins: [],
};

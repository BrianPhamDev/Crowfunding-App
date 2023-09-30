module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Epilogue", "sans-serif;"],
      },
      colors: {
        primary: {
          color: "rgba(29, 192, 113, 1)",
          20: "rgba(74, 205, 141, 1)",
          40: "rgba(119, 217, 170, 1)",
          60: "rgba(165, 230, 198, 1)",
          80: "rgba(210, 242, 227, 1)",
          extra: "rgba(241, 251, 247, 1)",
        },
        secondary: {
          color: "rgba(111, 73, 253, 1)",
          20: "rgba(140, 109, 253, 1)",
          40: "rgba(169, 146, 254, 1)",
          60: "rgba(197, 182, 254, 1)",
          80: "rgba(226, 219, 255, 1)",
        },
        dark: {
          bg: "rgba(19, 19, 26, 1)",
          secondary: "rgba(28, 28, 36, 1)",
          soft: "rgba(34, 34, 44, 1)",
          softer: "rgba(36, 36, 44, 1)",
          stroke: "rgba(58, 58, 67, 1)",
          red: "rgba(66, 44, 50, 1)",
        },
        1: "rgba(58, 58, 67, 1)",
        2: "rgba(75, 82, 100, 1)",
        3: "rgba(128, 129, 145, 1)",
        4: "rgba(178, 179, 189, 1)",
        icon: {
          color: "rgba(162, 162, 168, 1)",
        },
        whitsh: {
          white_soft: "rgba(252, 251, 255, 1)",
          gray_soft: "rgba(252, 252, 252, 1)",
          strock: "rgba(241, 241, 243, 1)",
          lite: "rgba(252, 252, 253, 1)",
        },
        error: "rgba(235, 87, 87, 1)",
      },
    },
  },
  plugins: [],
};

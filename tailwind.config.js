module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Inter"],
      mono: ["Space Mono", "monospace"],
    },
    extend: {
      fontFamily: {
        satoshi: "Satoshi",
      },
    },
  },
  plugins: [],
};

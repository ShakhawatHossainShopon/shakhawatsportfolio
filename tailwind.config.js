// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure all React files are covered
  ],
  theme: {
    extend: {
      colors: {
        // Custom colors
        Primary: "#118B50",
        Secondary: "#0f1722",
        third: "#1e2a3a",
      },
    },
  },
  plugins: [],
};

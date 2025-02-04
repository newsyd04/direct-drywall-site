module.exports = {
  content: [
    "./src/**/*.{ts,tsx,jsx,js}",
  ],
  darkMode: "class",  // Ensures dark mode works based on class
  theme: {
    extend: {
      animation: {
        aurora: "aurora 60s linear infinite",  // Animation for the background
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%", // Smooth movement
          },
        },
      },
    },
  },
  plugins: [],
};

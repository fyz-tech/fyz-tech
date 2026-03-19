/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        neon: "#a855f7",
        darkbg: "#0a0f2c",
      },

      boxShadow: {
        neon: "0 0 20px rgba(168,85,247,0.6)",
      },

      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },

      animation: {
        scroll: "scroll 20s linear infinite",
      },
    },
  },
  plugins: [],
};
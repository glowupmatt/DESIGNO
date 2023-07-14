/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      peach: {
        DEFAULT: "#E7816B",
        light: "#FFAD9B",
      },
      gray: {
        DEFAULT: "#333136",
        light: "#F1F3F5",
      },
      black: " #1D1C1E",
      white: " #FFFFFF",
    },
    screens: {
      sm: "640px",
      smMd: "425px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

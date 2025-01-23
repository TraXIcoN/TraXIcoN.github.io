/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Saira Extra Condensed", "sans-serif"],
      },
      colors: {
        primary: {
          50: "#fff1f1",
          100: "#ffdfdf",
          200: "#ffc5c5",
          300: "#ff9d9d",
          400: "#ff6464",
          500: "#ff3333",
          600: "#ed1c1c",
          700: "#c61212",
          800: "#a31313",
          900: "#861717",
          950: "#480707",
        },
      },
      animation: {
        "fade-in": "fadeIn 1s ease-in forwards",
        "slide-up": "slideUp 0.5s ease-out forwards",
        "bounce-slow": "bounce 3s infinite",
        pencil: "pencil-animation 5s infinite",
        line: "line-animation 5s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(100px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

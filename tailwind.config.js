/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
const withMT = require("@material-tailwind/react/utils/withMT");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        rgb: "rgb(15, 7, 21)",
        text: "rgb(135, 80, 247)",
        accent: "rgb(129, 76, 236)",
        bgContactColorDarck: "rgb(246, 243, 252)",
        bgContactColorlight: "rgb(24, 14, 32)",
      },
      animation: {
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
        "bottom-to-top": "bottom-to-top 1s ease-out",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
        "bottom-to-top": {
          "0%": { transform: "translateY(100%)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      },
      screens: {
        md: "1000px", // Define custom breakpoint for medium screens at 1000px
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        unb: ["Unbounded", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui"), flowbite.plugin()],
};

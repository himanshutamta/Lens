/** @type {import('tailwindcss').Config} */
import {nextui} from "@nextui-org/react";

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#000",
        plus: "#0091ff",
        secondary: "#fff",
        aboutBackground: "#e2f2ff",
        para : "rgba(57,57,57,.9)",
        blurBgOne : "#01c99b",
        blurBgTwo : "rgb(63, 189, 241)",
        blurBgThree : "rgb(255, 96, 95)",
        blurBgFour : "rgb(255, 159, 49)",
        bgColor: "#fcfbf7",
        bgVision: "#272e5c",
        inputBg: "#ededed",
        aboutBg: "#1b1c1e",
        secondaryBg : "#242424"
      },
      fontFamily: {
        raleway: ["var(--font-raleway)"],
        poppins: ["var(--font-poppins)"],
        inter: ["var(--font-inter)"],
        body: ["var(--font-inter)"],
      },
    },
  },
  plugins: [nextui()],
};
// export default config;

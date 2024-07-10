import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "26.9375rem", // 431px
      md: "37.5625rem", // 601px
      lg: "61.9375rem", // 991px
    },
    extend: {
      colors: {
        primary: {
          500: "#F47325",
          600: "#C65310",
        },
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      md: "26.875rem", // 430px
      lg: "61.875rem", // 990px
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

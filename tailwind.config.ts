import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      md: "37.5rem", // 600px
      lg: "56.25rem", // 900px
      xl: "75rem", // 1200px
      "2xl": "122.5rem", // 1800px
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

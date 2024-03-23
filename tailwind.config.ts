import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        colorWhite: "#ffffff",
        colorBlack: "#000000",
        colorPrimary: "#00ffff",
        colorSecundary: "#1ed0d0",
        colorThird: "#25a2a2",
        colorFourth: "#247777",
        colorFifth: "#1f4f4e",
        colorAlmostBlack: "#162929",
        colorblue: "#3b82f6",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;

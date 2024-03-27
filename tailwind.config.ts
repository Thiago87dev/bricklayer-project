import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "390px",
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        colorWhite: "#ffffff",
        colorBlack: "#000000",
        colorGray: "#808a99",
        colorGold: "#f4d03d",
        colorBege: "#ebeadf",
        colorDarkgray: "#374964",
        colorGreen: "#2e994d",
        colorGreenDark: "#243328",
        colorNav: "#ec0511",
        colorPrimary: "#132239",
        colorSecundary: "#cecdbe",
      },
      backgroundImage: {
        estrelas: "url('/img/estrelas.png')",
      },
    },
  },
  plugins: [],
};
export default config;

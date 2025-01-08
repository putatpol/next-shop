import type { Config } from "tailwindcss";
const plugin = require("tailwindcss/plugin");

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    keyframes: {
      fadeUp: {
        "0%": { transform: "translateY(0)", opacity: "1" },
        "100%": { transform: "translateY(-20)", opacity: "0" },
      },
      slideBannerTextLeft: {
        "0%": { transform: "translateX(200px)", opacity: "0" },
        "100%": { transform: "translateX(100px)", opacity: "1" },
      },
      slideBannerTextRight: {
        "0%": { transform: "translateX(-200px)", opacity: "0" },
        "100%": { transform: "translateX(-100px)", opacity: "1" },
      },
      slideBannerImgUp: {
        "0%": { transform: "translateY(100px) translateX(1rem)", opacity: "0" },
        "100%": { transform: "translateY(0) translateX(1rem)", opacity: "0.7" },
      },
      slideBannerImgDown: {
        "0%": { transform: "translateY(-50px) translateX(-1rem)", opacity: "0" },
        "100%": { transform: "translateY(5rem) translateX(-1rem)", opacity: "0.7" },
      },
    },
    animation: {
      fadeUp: "fadeUp 1s ease-out forwards",
      slideLeft: "slideBannerTextLeft 1s ease-in-out forwards",
      slideRight: "slideBannerTextRight 1s ease-in-out forwards",
      slideUp: "slideBannerImgUp 1s ease-in-out forwards",
      slideDown: "slideBannerImgDown 1s ease-in-out forwards",
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }: any) {
      const headings = {
        h1: "4xl",
        h2: "3xl",
        h3: "2xl",
        h4: "xl",
        h5: "lg",
      };

      addBase(
        Object.fromEntries(
          Object.entries(headings).map(([tag, size]) => [
            tag,
            {
              fontSize: theme(`fontSize.${size}`),
              fontWeight: theme("fontWeight.bold"),
            },
          ]),
        ),
      );
    }),
  ],
} satisfies Config;

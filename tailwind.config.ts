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
    },
    animation: {
      fadeUp: "fadeUp 1s ease-out forwards",
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

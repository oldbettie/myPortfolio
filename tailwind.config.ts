import type { Config } from "tailwindcss";

export const APP_COLORS = {
  background: "#24262A",
  background_highlight: "#2D2E32",
  font_main: "#969696",
  font_light: "#B9B9B9",
  font_dark: "#6C6D73",
  font_highlight: "#FBFF33",
  font_header: "#E2E2E2",
  logo: "#1F2023",
};

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ...APP_COLORS,
      },
      borderColor: {
        ...APP_COLORS,
      },
      fontFamily: {
        code: ["Source Code Pro", "mono space"],
        interface: ["Inter", "sans-serif"],
        "console-bold": ["Inconsolata-Bold", "sans-serif"],
        console: ["Inconsolata", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

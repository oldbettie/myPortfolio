import type { Config } from "tailwindcss"

export const APP_COLORS = {
  background: "#0f172a", // Slate 900
  background_highlight: "#1e293b", // Slate 800
  font_main: "#94a3b8", // Slate 400
  font_light: "#cbd5e1", // Slate 300
  font_dark: "#475569", // Slate 600
  font_highlight: "#2dd4bf", // Teal 400
  font_header: "#f1f5f9", // Slate 100
  logo: "#020617", // Slate 950
}

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
        "code": ["Source Code Pro", "mono space"],
        "interface": ["Inter", "sans-serif"],
        "console-bold": ["Inconsolata-Bold", "sans-serif"],
        "console": ["Inconsolata", "sans-serif"],
      },
    },
  },
  plugins: [],
}
export default config

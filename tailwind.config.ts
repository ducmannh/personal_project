import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        colorSky: "#C3EBFA",
        colorSkyLight: "#EDF9FD",
        colorSkyDark: "#5EB3E8",
        colorPurple: "#CFCEFF",
        colorPurpleLight: "#F1F0FF",
        colorPurpleDark: "#7C7BE5",
        colorYellow: "#FAE27C",
        colorYellowLight: "#FEFCE8",
        colorYellowDark: "#C9A544",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  darkMode: "class",
  plugins: [],
} satisfies Config;

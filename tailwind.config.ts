import { transform } from "next/dist/build/swc";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Urbanist: ['Urbanist', 'sans-serif'],
      },
      animation: {
        "ping-large": "ping-large 1s ease-in-out infinite",
        "move-left": "move-left 1s linear infinite",
      },
      keyframes: {
        'ping-large': {
          '75%, 100%': {
            transform: "scale(3)",
            opacity: "0",
          },
        },
        "move-left": {
          '0%': {
            transform: "translate(0%)",
          },
          '100%': {
            transform: "translate(-50%)",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;

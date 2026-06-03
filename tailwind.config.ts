import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
      },
    },
  },
  plugins: [daisyui],
  // daisyui plugin options
  daisyui: {
    themes: ["light"],
  },
};

export default config as Config;

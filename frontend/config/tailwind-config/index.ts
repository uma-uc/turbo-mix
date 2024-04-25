import type { Config } from "tailwindcss"
import radixThemePlugin from "radix-ui-themes-with-tailwind";

const config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./features/**/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
    "../../frontend/core/ui/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    radixThemePlugin({
      useTailwindColorNames: true, // optional
      useTailwindRadiusNames: true, // optional
      mapMissingTailwindColors: true, // optional
    }),
  ],
} satisfies Config

export default config

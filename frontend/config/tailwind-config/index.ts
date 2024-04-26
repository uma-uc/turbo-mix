import type { Config } from "tailwindcss"
import tailwindClampConfig from '@tailwindcss/line-clamp'
import tailwindTypographyConfig from '@tailwindcss/typography'
import tailwindAnimatePlugin from "tailwindcss-animate"

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
    tailwindAnimatePlugin,
    tailwindClampConfig,
    tailwindTypographyConfig,
    
  ],
} satisfies Config

export default config

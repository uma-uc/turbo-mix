import type { Config } from "tailwindcss"

const config = {
  content: [
    "./index.html", "./src/**/*.{ts,tsx}",
    "../../frontend/core/ui/components/**/*.{ts,tsx}",
    "../../frontend/core/ui/components/**/*.{ts,tsx}",
  ],
//  presets: [tailwindConfig],
} satisfies Config

export default config

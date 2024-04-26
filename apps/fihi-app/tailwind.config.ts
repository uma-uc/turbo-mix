import tailwindConfig from "@incmix/tailwind-config"
import type { Config } from "tailwindcss"

const config = {
  ...tailwindConfig,
  content: [
    "./index.html", "./src/**/*.{ts,tsx}",
    "../../frontend/core/ui/components/**/*.{ts,tsx}",
    "../../frontend/core/ui/components/**/*.{ts,tsx}",
  ],
//  presets: [tailwindConfig],
} satisfies Config

export default config

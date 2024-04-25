import { shadcnPreset } from "@incmix/tailwind-config/lib/shadcn-preset"
import type { Config } from "tailwindcss"

const config = {
  content: [
    "./index.html", "./src/**/*.{ts,tsx}",
    "../../frontend/core/ui/components/**/*.{ts,tsx}",
    "../../frontend/core/ui/components/**/*.{ts,tsx}",
  ],
  presets: [shadcnPreset],
} satisfies Config

export default config

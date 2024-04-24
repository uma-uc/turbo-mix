import { shadcnPreset } from "@incmix/tailwind-config/lib/shadcn-preset"
import type { Config } from "tailwindcss"

const config = {
  content: [
    "./index.html", "./src/**/*.{ts,tsx}",
    "../../packages/ui2/components/**/*.{ts,tsx}",
    "../../packages/ui/components/**/*.{ts,tsx}",
  ],
  presets: [shadcnPreset],
} satisfies Config

export default config

import type { Config } from "tailwindcss"

const config = {
  content: [
    "./src/stories/**/*.{ts,tsx}",
    "../../client/core/ui/components/**/*.{ts,tsx}",
  ],
} satisfies Config

export default config

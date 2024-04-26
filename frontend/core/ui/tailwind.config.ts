import type { Config } from "tailwindcss"

const config = {
  ...sharedConfig,
  content: ["./*.{ts,tsx}"],
} satisfies Config

export default config

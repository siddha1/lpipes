import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#05070A',
        charcoal: '#1C1F26',
        platinum: '#E2E2E2',
        mint: '#00E6CC',
        'mint-blue': '#429E9D',
        azure: '#0047FF',
        'muted-gray': '#6B7280',
      },
      fontFamily: {
        serif: ['var(--font-spectral)', 'Georgia', 'serif'],
        mono: ['var(--font-jetbrains)', 'Consolas', 'monospace'],
      },
    },
  },
  plugins: [],
};
export default config;

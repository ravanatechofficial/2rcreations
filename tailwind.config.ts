
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'soft-beige': '#F5EDE6',
        'blush-pink': '#E8CFCF',
        'cream-white': '#FAF7F2',
        'gold-accent': '#C6A75E',
        'dark-charcoal': '#333333',
      },
      fontFamily: {
        'playfair-display': ['Playfair Display', 'serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config

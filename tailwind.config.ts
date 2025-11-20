import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#2E7D32',
          darkGreen: '#1B5E20',
          brown: '#6B4F3A',
          cream: '#F7F3EE',
          ink: '#0E1111',
          softGray: '#F5F5F0'
        }
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
        display: ['var(--font-display)', 'sans-serif'],
        hand: ['var(--font-hand)', 'cursive'],
      },
      backgroundImage: {
        'pattern-leaf': "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1h2v2H1V1zm4 4h2v2H5V5z' fill='%232E7D32' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E\")",
      }
    },
  },
  plugins: [],
};
export default config;


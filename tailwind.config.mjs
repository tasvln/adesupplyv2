/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        backdrop: '#2B2F22',
        'backdrop-2': '#23261B',
        card: '#EAE4D2',
        'card-2': '#DFD8C0',
        line: '#B9B092',
        ink: '#1A1A14',
        'ink-dim': '#5C5A46',
        stamp: '#7A2E1D',
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'monospace'],
        stencil: ['"Black Ops One"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

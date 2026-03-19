/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy-dark': '#2E312B',
        'navy': '#363932', /* Extracted Primary Dark Olive */
        'steel': '#65633A',
        'concrete': '#B1B0A1',
        'concrete-light': '#E9E9E5',
        'safety': '#858456', /* Extracted Accent Olive Gold */
        'paper': '#FAF9F6', 
        'paper-dark': '#F4F4F0',
        'charcoal': '#22241F', /* Deepest Charcoal Olive */
      },
      fontFamily: {
        'heading': ['"Plus Jakarta Sans"', 'sans-serif'],
        'mono-brand': ['"IBM Plex Mono"', 'monospace'],
      },
      borderRadius: {
        'card': '0.75rem',
        'container': '1rem',
        'footer': '1.5rem',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy-dark': '#1C221F',
        'navy': '#2C3430',
        'steel': '#5B6960',
        'concrete': '#9FB0A5',
        'concrete-light': '#E8EDE9',
        'safety': '#8A9560',
        'paper': '#F9FAF9',
        'paper-dark': '#F0F3F1',
        'charcoal': '#181C1A',
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

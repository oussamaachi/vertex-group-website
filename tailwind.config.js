/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'moss-dark': '#3A3D2E',
        'moss': '#4E5C35',
        'moss-mid': '#6B7A42',
        'khaki': '#8A9A55',
        'khaki-light': '#9AAA60',
        'clay': '#CC5833',
        'cream': '#F2F0E9',
        'cream-dark': '#E8E4DC',
        'charcoal': '#1A1A1A',
      },
      fontFamily: {
        'jakarta': ['"Plus Jakarta Sans"', 'sans-serif'],
        'cormorant': ['"Cormorant Garamond"', 'serif'],
        'mono': ['"IBM Plex Mono"', 'monospace'],
      },
      borderRadius: {
        'card': '2rem',
        'container': '3rem',
        'footer': '4rem',
      },
    },
  },
  plugins: [],
}

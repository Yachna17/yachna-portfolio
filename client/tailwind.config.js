/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        accent: {
          light: '#710014',
          dark: '#C5002A',
        },
        coffee: {
          base: '#1E1208',
          card: '#271810',
          hover: '#311E14',
          alt: '#221409',
          border: '#3D2416',
          'border-mid': '#50301E',
        }
      },
      fontFamily: {
        head: ['Plus Jakarta Sans', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
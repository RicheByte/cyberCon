/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./home.jsx",
    "./innovation.jsx",
    "./register.jsx"
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          900: '#050505',
          800: '#0A0A0A',
          700: '#111111',
          600: '#1A1A1A',
        },
        cyber: {
          green: '#00FF41',
          crimson: '#FF0055',
          cyan: '#00F0FF',
        }
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      backgroundImage: {
        'grid-pattern': "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm1 1h38v38H1V1z' fill='%23ffffff' fill-opacity='0.02' fill-rule='evenodd'/%3E%3C/svg%3E\")",
      }
    },
  },
  plugins: [],
}

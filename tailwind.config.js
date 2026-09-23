/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'Helvetica',
          'Arial',
          'sans-serif'
        ]
      },
      colors: {
        navy: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617'
        },
        amber: {
          500: '#f59e0b',
          600: '#d97706',
          950: '#451a03'
        }
      }
    },
  },
  plugins: [],
}

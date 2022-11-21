/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    fontSize: {
      xs: 12,
      sm: 14,
      md: 16,
      xl: 24,
      '2xl': 28,
    },
    colors: {
      white: '#ffffff',
      green: '#0c7e7e',
      red: '#8a2525',
      'gray-200': '#cad1c3',
      'gray-100': '#e7eed0',
      'purple-900': '#2e1437',
      'purple-200': '#51425f',
    },
    extend: {
      fontFamily: {
        sans: 'Poppins, sans-serif',
      },
    },
  },
  plugins: ['tailwind-scrollbar'],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#d90217',
          dark: '#b80214',
        },
        brand: {
          green: '#4f8765',
          'green-dark': '#3c6a4e',
        },
        cream: {
          DEFAULT: '#fff8f2',
          200: '#fdeee3',
        },
        ink: {
          DEFAULT: '#2a1d16',
          soft: '#6b5b50',
        },
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)', 'Montserrat', 'sans-serif'],
      },
      borderRadius: {
        card: '1.25rem',
        block: '2rem',
      },
      boxShadow: {
        soft: '0 10px 30px -12px rgba(42,29,22,0.18)',
        warm: '0 24px 60px -24px rgba(217,4,22,0.28)',
      },
      maxWidth: {
        content: '1200px',
      },
      screens: {
        xs: '480px',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#D90416',
        secondary: {
          light: '#fff8f2',
          dark: '#4f8765',
        },
        text: {
          heading: '#ffffff',
          body: '#333333',
          link: '#ffffff',
          'link-hover': '#D90416',
        },
        background: {
          default: '#fff8f2',
        },
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        'h1': ['48px', '1.2'],
        'h2': ['36px', '1.2'],
        'h3': ['24px', '1.2'],
        'body': ['16px', '1.6'],
        'sm': ['14px', '1.6'],
      },
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '16px',
        'lg': '32px',
        'xl': '64px',
      },
      borderRadius: {
        'custom': '50px',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, rgba(217,4,22,0.8), rgba(79,135,101,0.8))',
        'button-gradient': 'linear-gradient(135deg, #D90416, #4f8765)',
        'dots-pattern': 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.2) 2px, transparent 2px)',
        'triangles-pattern': 'conic-gradient(from 0deg at 50% 50%, rgba(255,255,255,0.1) 0deg, transparent 120deg, rgba(255,255,255,0.1) 240deg, transparent 360deg)',
      },
      boxShadow: {
        'custom': '0 4px 12px rgba(0,0,0,0.1)',
      },
      screens: {
        'mobile': '480px',
        'tablet': '768px',
        'desktop': '1024px',
      },
    },
  },
  plugins: [],
}

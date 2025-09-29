/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          50: '#f0fdf9',
          100: '#ccfdf7',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#94e2d5',
          600: '#0d9488',
          DEFAULT: '#94e2d5',
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
      },
      backgroundImage: {
        'gradient-main': 'linear-gradient(135deg, #94e2d5 0%, #3b82f6 25%, #2563eb 50%, #1d4ed8 75%, #94e2d5 100%)',
      },
      animation: {
        'gradient-shift': 'gradientShift 20s ease infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        gradientShift: {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        }
      },
      fontFamily: {
        'heading': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

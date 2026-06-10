/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#050816',
        'bg-secondary': '#0B1120',
        'bg-tertiary': '#111827',
        'primary': '#2563EB',
        'primary-light': '#3B82F6',
        'primary-lighter': '#60A5FA',
        'text-primary': '#FFFFFF',
        'text-secondary': '#94A3B8',
        'border-color': 'rgba(255,255,255,0.08)',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      fontSize: {
        'xs': '0.75rem',
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
        '7xl': '4.5rem',
      },
      fontFamily: {
        'sans': ['Geist Sans', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #2563EB 0%, #3B82F6 100%)',
        'gradient-subtle': 'linear-gradient(180deg, rgba(37, 99, 235, 0.1) 0%, rgba(96, 165, 250, 0.05) 100%)',
      },
      boxShadow: {
        'glow-blue': '0 0 20px rgba(37, 99, 235, 0.15)',
        'glow-blue-lg': '0 0 40px rgba(37, 99, 235, 0.2)',
        'subtle': '0 4px 20px rgba(0, 0, 0, 0.3)',
      },
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}

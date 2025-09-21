import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        playful: ['"Nunito"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Rubik Bubbles"', 'cursive'],
      },
      colors: {
        brand: {
          50: '#f6f3ff',
          100: '#ece7ff',
          200: '#d9ceff',
          300: '#c0a8ff',
          400: '#a37aff',
          500: '#854dff',
          600: '#6b2aff',
          700: '#551be6',
          800: '#4516b8',
          900: '#3a1593',
        },
        candy: {
          pink: '#ff78b9',
          purple: '#a78bfa',
        },
      },
      animation: {
        'gradient-x': 'gradient-x 8s ease infinite',
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
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

export default config

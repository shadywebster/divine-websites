import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          saffron: '#FF6B35',
          gold: '#FFD700',
        },
        secondary: {
          blue: '#1E3A8A',
          purple: '#6B21A8',
        },
        accent: {
          teal: '#14B8A6',
          rose: '#E11D48',
        },
        background: {
          navy: '#0F172A',
          cream: '#FEF3C7',
        },
        text: {
          light: '#F8FAFC',
          dark: '#1E293B',
        },
      },
      fontFamily: {
        heading: ['Playfair Display', 'Cinzel', 'serif'],
        body: ['Poppins', 'Inter', 'sans-serif'],
        sanskrit: ['Noto Sans Devanagari', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
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
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
export default config

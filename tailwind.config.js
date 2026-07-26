/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#e11d48',
        'primary-dark': '#be123c',
        'primary-light': '#fb7185',
        accent: '#f43f5e',
        dark: '#050507',
        'dark-light': '#0c0c10',
        'dark-card': 'rgba(255, 255, 255, 0.03)',
        'glass': 'rgba(255, 255, 255, 0.05)',
        'glass-border': 'rgba(255, 255, 255, 0.08)',
        'gray-text': '#71717a',
        'light-text': '#d4d4d8',
        'white-text': '#fafafa',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(225, 29, 72, 0.08)',
        'glass-lg': '0 8px 32px 0 rgba(225, 29, 72, 0.15)',
        'red-glow': '0 0 40px rgba(225, 29, 72, 0.3)',
      },
      backdropBlur: {
        'glass': '16px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(225, 29, 72, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(225, 29, 72, 0.6)' },
        },
      },
    },
  },
  plugins: [],
}

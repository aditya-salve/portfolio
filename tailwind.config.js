/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        portfolio: {
          bg: '#080B14',
          surface: '#101626',
          card: '#131B2E',
          cardHover: '#18223A',
          border: 'rgba(255, 255, 255, 0.08)',
          borderHover: 'rgba(59, 130, 246, 0.4)',
          text: '#F8FAFC',
          muted: '#94A3B8',
          subtle: '#64748B',
        },
        light: {
          bg: '#F8FAFC',
          surface: '#FFFFFF',
          card: '#F1F5F9',
          cardHover: '#E2E8F0',
          border: 'rgba(0, 0, 0, 0.08)',
          borderHover: 'rgba(59, 130, 246, 0.5)',
          text: '#0F172A',
          muted: '#475569',
          subtle: '#64748B',
        },
        accent: {
          blue: '#3B82F6',
          blueHover: '#2563EB',
          blueGlow: 'rgba(59, 130, 246, 0.35)',
          violet: '#8B5CF6',
          violetHover: '#7C3AED',
          violetGlow: 'rgba(139, 92, 246, 0.35)',
          cyan: '#06B6D4',
          emerald: '#10B981',
          amber: '#F59E0B',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Sora', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace']
      },
      boxShadow: {
        'glow-blue': '0 0 25px -5px rgba(59, 130, 246, 0.45)',
        'glow-violet': '0 0 25px -5px rgba(139, 92, 246, 0.45)',
        'glow-card': '0 10px 30px -10px rgba(0, 0, 0, 0.5), 0 0 15px 0 rgba(59, 130, 246, 0.08)',
      },
      animation: {
        'float-slow': 'float 7s ease-in-out infinite',
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        }
      }
    },
  },
  plugins: [],
}

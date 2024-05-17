import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'
import type { PluginAPI } from 'tailwindcss/types/config'

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
      },
      colors: {
        border: 'var(--border)',
        ring: 'var(--ring)',
        background: {
          DEFAULT: 'var(--background)',
          tags: 'var(--background-tags)',
        },
        foreground: 'var(--foreground)',
        textGray: 'var(--accordion-text)',
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
          hover: 'var(--primary-hover)',
          active: 'var(--primary-active)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
          hover: 'var(--secondary-hover)',
        },
        destructive: {
          DEFAULT: 'var(--destructive)',
          foreground: 'var(--destructive-foreground)',
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        accent: {
          DEFAULT: 'var(--accent))',
          foreground: 'var(--accent-foreground)',
        },
        popover: {
          DEFAULT: 'var(--popover)',
          foreground: 'var(--popover-foreground)',
        },
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)',
          hover: 'var(--card-hover)',
        },
        input: {
          DEFAULT: 'var(--input)',
          hover: 'var(--input-hover)',
          focus: 'var(--input-focus)',
        },
        benefit: {
          DEFAULT: 'var(--benefit)',
        },
      },
      borderRadius: {
        DEFAULT: 'calc(var(--radius) / 2)',
        xl: 'calc(var(--radius) * 2)',
        lg: 'var(--radius)',
        md: 'calc(var(--radius) / 2)',
        sm: 'calc(var(--radius) / 4)',
      },
    },
  },
  plugins: [
    ({ addUtilities }: PluginAPI) => {
      const newUtilities = {
        '.container': {
          'max-width': '1516px',
          'padding-left': '15px',
          'padding-right': '15px',
        },
        '.main-title': {
          'font-weight': '500',
          'font-size': '96px',
          'line-height': '96px',
          '@media (max-width: 736px)': {
            'font-size': '72px',
            'line-height': '72px',
          },
          '@media (max-width: 528px)': {
            'font-size': '48px',
            'line-height': '48px',
          },
        },
        '.section-title': {
          'text-align': 'center',
          'font-weight': '500',
          'font-size': '64px',
          'line-height': '48px',
          '@media (max-width: 736px)': {
            'font-size': '48px',
            'line-height': '48px',
          },
          '@media (max-width: 528px)': {
            'font-size': '32px',
            'line-height': '32px',
          },
        },
      }
      addUtilities(newUtilities)
    },
  ],
} satisfies Config

export default config

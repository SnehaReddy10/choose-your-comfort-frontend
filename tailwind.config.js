/** @type {import('tailwindcss').Config} */
module.exports = {
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
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
    colors: {
      orange: {
        100: '#F5993C',
        200: '#D64D00',
        400: '#F97316',
      },
      white: '#FFFFFF',
      black: {
        100: '#333333',
        900: '#000000',
      },
      gray: {
        100: '#e6e6e6',
        200: '#999999',
        300: '#F6F6F6',
        400: '#666666',
      },
      red: {
        500: '#F73308',
      },
      brown: {
        200: '#353434',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

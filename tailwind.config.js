/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        'zlowy-bg': '#f4f4f5',
        'zlowy-accent': '#ccff00',
        'zlowy-blue': '#0044ff',
      },
      borderWidth: {
        3: '3px',
      },
      boxShadow: {
        brutal: '8px 8px 0px 0px rgba(0,0,0,0.85)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 22s linear infinite',
      },
    },
  },
  plugins: [],
}

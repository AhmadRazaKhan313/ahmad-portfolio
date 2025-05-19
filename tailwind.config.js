/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        background: '#111827',
        text: {
          primary: '#FFFFFF',
          secondary: '#CBD5E1',
        },
        accent: '#60A5FA',
        primary: {
          start: '#4A90E2',
          end: '#67B26F',
        },
        secondary: {
          start: '#FC466B',
          end: '#3F5EFB',
        },
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '42': '10.5rem',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
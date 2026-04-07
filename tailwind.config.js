/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#fcf7f2',
        oat: '#f4e9dc',
        peach: '#f6d9cb',
        blush: '#f4dce3',
        sage: '#dbe6d8',
        sky: '#d9eaf2',
        cocoa: '#765b51',
        ink: '#45362f',
      },
      fontFamily: {
        display: ['"DM Serif Display"', 'serif'],
        sans: ['Manrope', 'sans-serif'],
      },
      boxShadow: {
        cloud: '0 24px 60px rgba(143, 112, 92, 0.08)',
        card: '0 14px 36px rgba(143, 112, 92, 0.07)',
      },
      backgroundImage: {
        glow:
          'radial-gradient(circle at top left, rgba(246, 217, 203, 0.58), transparent 36%), radial-gradient(circle at top right, rgba(244, 233, 220, 0.52), transparent 28%), linear-gradient(180deg, #fdf7f0 0%, #fffaf6 100%)',
      },
    },
  },
  plugins: [],
};

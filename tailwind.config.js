/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    'bg-rose-50',
    'bg-amber-50',
    'bg-lime-50',
    'bg-emerald-50',
    'bg-violet-50',
    'border-rose-100',
    'border-amber-100',
    'border-lime-100',
    'border-emerald-100',
    'border-violet-100',
    'bg-skillGradient',
  ],
  theme: {
    extend: {
      fontFamily: {
        covered: ['var(--font-covered-grace)', 'cursive'],
      },
      screens: {
        xs: '414px',
      },
      colors: {
        gray: {
          ...require('tailwindcss/colors').gray,
          custom: '#f5f5f5',
        },
      },
      backgroundImage: {
        customGradient:
          'linear-gradient(180deg, rgba(255, 255, 255, 0) 0.17%, rgba(255, 255, 255, 0.7) 40.16%, #FFFFFF 81.66%)',
        skillGradient:
          'linear-gradient(180deg, rgba(255, 255, 255, 0.36) 0%, rgba(255, 255, 255, 0.24) 50%, rgba(255, 255, 255, 0.42) 100%)',
      },
      boxShadow: {
        custom:
          '0px 7px 24px rgba(0, 0, 0, 0.07), 0px 2px 0px rgba(233, 233, 233, 0.7)',
        customLight: '0px 2px 0px rgba(233, 233, 233, 0.9)',
        imageShadow:
          '0px 6.3718px 21.8462px rgba(0, 0, 0, 0.07), 0px 1.82051px 0px rgba(233, 233, 233, 0.7)',
        selectShadow:
          '0px 1.625px 6.5px rgba(0, 0, 0, 0.05), 0px 9.75px 39px rgba(0, 0, 0, 0.04), inset 0px 1.625px 1.625px rgba(0, 0, 0, 0.04)',
        accordionShadow: '0px 0.995276px 0px rgba(233, 233, 233, 0.9)',
      },
    },
  },
  plugins: [],
};

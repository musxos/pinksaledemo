import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';

const config: Config = {
 content: ['./src/**/*.{js,ts,jsx,tsx}'],
 theme: {
  colors: {
   ...colors,
   'custom-white': '#EDEDED',
   'second-white': '#BFBFBF',
   'second-black': '#7C7C7C',
   'light-black': '#353535',
   'bold-black': '#0E0E0E',
   'primary-pink': '#A502BF',
   'light-blue': '#283162',
   'bold-blue': '#233BB7',
   input: '#181818',
  },
  extend: {
   padding: {
    navbar: '225px',
   },
   dropShadow: {
    hover: '0 0 10px #1A2E96',
   },
   gridTemplateColumns: {
    '13': 'repeat(13, minmax(0, 1fr))',
   },
  },
  screens: {
   sm: '640px',
   md: '768px',
   lg: '1024px',
   xl: '1280px',
   '2xl': '1536px',
   '3xl': '1920px',
   '4xl': '2561px',
  },
 },
};
export default config;

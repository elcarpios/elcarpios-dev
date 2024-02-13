/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'
  ],
  darkMode: 'class',
  theme: {
    extend: {

      colors: {
        malt: '#FC5656',
        primary: {
          '50': '#f7f4fe',
          '100': '#efebfc',
          '200': '#e2dafa',
          '300': '#cdbcf6',
          '400': '#ac8bee',
          '500': '#9b6be7',
          '600': '#8c4bdc',
          '700': '#7d39c8',
          '800': '#682fa8',
          '900': '#56288a',
          '950': '#36185d',
        },
        dark: {
          '50': '#f6f6f6',
          '100': '#e7e7e7',
          '200': '#d1d1d1',
          '300': '#b0b0b0',
          '400': '#888888',
          '500': '#6d6d6d',
          '600': '#5d5d5d',
          '700': '#4f4f4f',
          '800': '#454545',
          '900': '#3d3d3d',
          '950': '#0e0e0e',
        },

      }
    },
    fontFamily: {
      body: [
        'Poppins',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'system-ui'
      ]
    },
  }
}

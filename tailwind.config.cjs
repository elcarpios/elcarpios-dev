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
          '50': '#f6f3ff',
          '100': '#efe9fe',
          '200': '#e2d6fe',
          '300': '#ccb5fd',
          '400': '#bb96fa',
          '500': '#9d5df5',
          '600': '#913bec',
          '700': '#8229d8',
          '800': '#6c22b5',
          '900': '#5a1e94',
          '950': '#381065',
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

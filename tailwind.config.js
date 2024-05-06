/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    './node_modules/preline/preline.js'
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto-fill-325': 'repeat(auto-fit, minmax(400px, 1fr));',
      },
      scale: {
        '200': '1.50',
      }

    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('preline/plugin'),
  ],
}


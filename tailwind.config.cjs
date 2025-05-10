/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#4A5568', // Gris foncé (configurable)
        'brand-secondary': '#A0AEC0', // Gris clair (configurable)
        'brand-accent': '#E53E3E', // Rouge (configurable)
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Police moderne et lisible
        serif: ['Lora', 'serif'], // Police élégante pour les titres ou accents
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

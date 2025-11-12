module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          500: '#0284c7'
        }
      }
    }
  },
  plugins: []
};

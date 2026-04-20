module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0f0f0f',
        'dark-secondary': '#1a1a1a',
        'dark-tertiary': '#252525',
      },
      borderRadius: {
        xl: '12px',
      },
      spacing: {
        gutter: '8px',
      },
    },
  },
  plugins: [],
}

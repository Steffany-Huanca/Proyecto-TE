export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        aura: {
          red: '#E63946',
          light: '#F1FAEE',
          blue: '#A8DADC',
          cerulean: '#457B9D',
          dark: '#1D3557',
        }
      }
    },
  },
  plugins: [],
}
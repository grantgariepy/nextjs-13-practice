{import('tailwindcss').Config}
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#0D0D0D",
          "secondary": "#1A1919",
          "accent": "#f3f4f6",
          "neutral": "#000000",
          "base-100": "#FFFFFF",
          "info": "#0072F5",
          "success": "#21CA51",
          "warning": "#FF6052",
          "error": "#DE1B8D",
        }
      }
    ],
  }
}

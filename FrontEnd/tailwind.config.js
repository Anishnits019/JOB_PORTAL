export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
        mulish: ['Mulish', 'sans-serif'],
        noto: ['Noto Sans', 'sans-serif'],
        savate: ['"Savate"', 'sans-serif'], // <-- newly added
      },
    },
  },
  plugins: [],
};

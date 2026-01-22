/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["AliceWonderland", "serif"],
        heading: ['"Orpheus Pro"', "serif"],
        body: ['"Inter Tight"', "sans-serif"],
      },
    },
  },
  plugins: [],
};

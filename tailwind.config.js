/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        antonio: ["Antonio", "sans-serif"],
        teachers: ["Teachers", "sans-serif"],
        druk: ["DrukWide", "sans-serif"],
        hate: ["Hate Your Writing", "sans-serif"],
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          lg: "1124px",
          md: "850px",
        },
      },
      
      important: true,
    },
  },
  plugins: [],
};

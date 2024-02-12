/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-gray": "#555",
        "custom-blue": "#6286AA",
      },
    },
    container: {
      padding: {
        sm: "2rem",
      },
    },
  },
  plugins: [],
};

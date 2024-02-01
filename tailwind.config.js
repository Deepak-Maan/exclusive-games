/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        anton: ["'Anton', sans-serif"],
        inter: ["'Inter', sans-serif "],
      },
      backgroundImage: {
        "blue-307": "linear-gradient(307deg, #51C8EF -13.72%, #7AF57A 102.02%)",
      },
    },
  },
  plugins: [],
};

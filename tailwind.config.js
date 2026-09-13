/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        // রিকোয়ারমেন্ট অনুযায়ী এক জায়গায় শেয়ার্ড গ্রেডিয়েন্ট থিম
        "brand-gradient":
          "linear-gradient(135deg, #f97316 0%, #ec4899 50%, #8b5cf6 100%)",
      },
    },
  },
  plugins: [],
};

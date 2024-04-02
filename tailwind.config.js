/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "hsl(14, 45%, 36%)",
        secondary: "hsl(332, 51%, 32%)",
        // white: "hsl(0, 0%, 100%)",
        "rose-white": "hsl(330, 100%, 98%)",
        eggshell: "hsl(30, 54%, 90%)",
        light: "hsl(30, 18%, 87%)",
        brown: "hsl(30, 10%, 34%)",
        charcoal: "hsl(24, 5%, 18%)"

      },
      fontFamily: {
        young: "Young Serif",
        outfil: "Outfit SemiBold"
      }
    },
  },
  plugins: [],
};

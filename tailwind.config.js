/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        monument: ["Monument Extended", "sans-serif"],
        "monument-ultrabold": ["Monument Extended", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      fontSize: {
        h1: ["48px"],
        h2: ["40px"],
        h3: ["32px"],
        h4: ["28px"],
        h5: ["24px"],
        h6: ["18px"],
      },
      colors: {
        "custom-white": "#fdfdfd",
        "custom-gray": "#383838",
        "custom-black": "#100F10",
        "custom-brown": "#CAA77B",
      },
    },
  },
  plugins: [],
};

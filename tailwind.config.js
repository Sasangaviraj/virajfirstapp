/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'my-background': '#f19c9c',
      },
      dropshadow:{
        "header-shadow": " rgba(0, 0, 0, 0.35) 0px 5px 15px",
        "product-shadow": "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      },
    },
  },
  plugins: [],
};


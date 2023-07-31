/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"];
export const theme = {
  screens: {
    xs: "376px",
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
  },
  extend: {},
};
export const plugins = [];
export const darkMode = "class";

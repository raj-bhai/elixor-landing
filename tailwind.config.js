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
        'elixzor-dark-purple': '#1a0a28',
        'elixzor-light-purple': '#d927ff',
        'elixzor-header-purple': '#c399ff',
        'elixzor-button-purple': '#8e2de2',
        'elixzor-button-hover': '#7327b4',
        'elixzor-footer-purple': '#4e2a87',
      },
    },
  },
  plugins: [],
};

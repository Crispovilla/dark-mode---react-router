/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: "#042f2e" /**Teal 950*/,
        light: "#f0fdfa" /**Teal 50 */,
      },
    },
    fontFamily: {
      sans: ["Bebas Neue", "ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      display: ["Roboto"],
      body: ['"Open Sans"'],
    },
  },
  plugins: [],
};

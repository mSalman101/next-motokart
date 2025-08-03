/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        darkTheme: {
          primary: "#f4aa3a",
          secondary: "#f4f4a1",
          accent: "#1be885",
          neutral: "#181825",
          "base-100": "#1a1b26",
          info: "#5a6bb7",
          success: "#23b893",
          warning: "#f79926",
          error: "#ea535a",
          body: {
            "background-color": "#181825",
          },
        },
      },
    ],
  },
};

import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    nextui({
      addCommonColors: true,
      defaultTheme: "dark",
      themes: {
        light: {
          colors: {},
        },
        dark: {
          colors: {
            black: "#002E62",
            white: "#FAFAFA",
            default: "#CCE3FD",
            focus: "#000000",
            background: "#002E62",
            foreground: "#FAFAFA",
            primary: "#002e62",
            secondary: "#d1d1d1",
          },
        },
      },
    }),
  ],
};
export default config;

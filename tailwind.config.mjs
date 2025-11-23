/** @type {import('tailwindcss').Config} */
import typography from "@tailwindcss/typography";

export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    darkMode: "class",
    theme: {
        fontFamily: {
            uncut: ["UncutSans", "sans-serif"],
            titleboy: ["Titleboy", "sans-serif"], // <-- custom title font
            bodyboy: ['Bodyboy', 'sans-serif'], // <-- custom body font
        },
        extend: {
            colors: {
                accent: {
                    50:  "#e6f4ff",
                    100: "#cce9ff",
                    200: "#99d3ff",
                    300: "#66bdff",
                    400: "#33a7ff",
                    DEFAULT: "#0d9aff",   // MAIN COLOR
                    600: "#0080db",
                    700: "#0067b0",
                    800: "#004e85",
                    900: "#00355a",
                },
            },
        },
    },
    plugins: [typography],
};

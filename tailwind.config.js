/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        container: {
            center: true,
        },
        screens: {
            sm: "640px",
            // => @media (min-width: 640px) { ... }

            md: "768px",
            // => @media (min-width: 768px) { ... }

            lg: "1024px",
            // => @media (min-width: 1024px) { ... }

            xl: "1280px",
            // => @media (min-width: 1280px) { ... }

            "2xl": "1536px",
        },
        colors: {
            blue: "#1fb6ff",
            purple: "#7e5bef",
            pink: "#ff49db",
            orange: "#ff7849",
            green: "#13ce66",
            yellow: "#ffc82c",
            "gray-dark": "#273444",
            gray: "#8492a6",
            "gray-light": "#d3dce6",
            transparent: "transparent",
            current: "currentColor",
            white: "#ffffff",
            midnight: "#121063",
            metal: "#565584",
            tahiti: "#3ab7bf",
            silver: "#ecebff",
            "bubble-gum": "#ff77e9",
            bermuda: "#78dcca",
        },
        extend: {
            spacing: {
                128: "32rem",
                144: "36rem",
                1: "8px",
                2: "12px",
                3: "16px",
                4: "24px",
                5: "32px",
                6: "48px",
            },
            borderRadius: {
                "4xl": "2rem",
            },
        },
        fontFamily: {
            customFont: ["Epilogue", "Poppins", "Montserrat", "sans-serif"],
        },
    },
    plugins: [
        require("flowbite/plugin"),
        function ({ addUtilities }) {
            addUtilities({
                ".no-scrollbar::-webkit-scrollbar": {
                    display: "none",
                },
                ".no-scrollbar": {
                    "-ms-overflow-style": "none",
                    "scrollbar-width": "none",
                },
            });
        },
    ],
};

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: {
                    1: "#c78283",
                    2: "#f3d9dc",
                    3: "#d7bea8",
                    4: "#b49286",
                    5: "#744253",
                    6: "#ac1d60",
                    7: "#5f0f40",
                    8: "#9a031e",
                    9: "#fb8b24",
                    10: "#e36414",
                    11: "#0f4c5c",
                },
            },
            fontFamily: {
                sanation: ["Sanation", "sans-serif"],
                funnel: ["Funnel Display", "sans-serif"],
                permanent: ["Permanent Marker", "cursive"],
                mrdafoe: ["Mr Dafoe", "cursive"],
                caveat: ["Caveat", "cursive"],
                shadows: ["Shadows Into Light", "cursive"],
            },
        },
    },
    plugins: [],
};
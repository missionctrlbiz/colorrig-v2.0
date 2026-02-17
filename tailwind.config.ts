
import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-mtn-brighter-sans)'],
            },
            colors: {
                primary: "#00bcd4", // Colorrig Aqua
                secondary: "#070327", // Colorrig Blue
            },
        },
    },
    plugins: [],
};
export default config;

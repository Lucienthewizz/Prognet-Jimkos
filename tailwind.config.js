import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Poppins", "sans-serif"],
                fair: ["Playfair Display", "sans-serif"],
            },
            colors: {
                primary: "#164ba1", // Dark Blue
                secondary: "#adb4bf", // Grayish Blue
                text: "#333", // Dark Text Color
                "light-text": "#666", // Medium Gray
                background: "#f0f4fa", // Very Light Blue
                Lightgrey: "#F3F3F3", // Light Grey
            },
            maxWidth: {
                '1300': '1300px',
            },
            screens: {
                'lgCustom': '1024px',
                'Laptop' : '1300px',
            },
            lineHeight: {
                relaxed: '1.6', 
            },
        },
    },

    plugins: [
        forms,
        require('daisyui'), // Correct way to include DaisyUI
    ],
};

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
            },
            colors: {
                primary: "#164ba1", // Dark Blue
                secondary: "#adb4bf", // Grayish Blue
                text: "#333", // Dark Text Color
                "light-text": "#666", // Medium Gray
                background: "#f0f4fa", // Very Light Blue
            },
        },
    },

    plugins: [forms],
};

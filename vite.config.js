import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
    plugins: [
        laravel({
            input: "resources/js/app.jsx", // Entri utama aplikasi React
            refresh: true,
        }),
        react(),
    ],
    resolve: {
        alias: {
            "@Base": path.resolve(__dirname, "./resources/js/Base"),
            "@Components": path.resolve(__dirname, "./resources/js/Components"),
            "@Container": path.resolve(__dirname, "./resources/js/Container"),
            "@Images": path.resolve(__dirname, "./public/images"),
            "@Layouts": path.resolve(__dirname, "./resources/js/Layouts"),
            "@Pages": path.resolve(__dirname, "./resources/js/Pages"),
        },
    },
    build: {
        outDir: "public/build", // Folder keluaran hasil build
    },
    base: "/build/", // URL base untuk mengakses file build
});

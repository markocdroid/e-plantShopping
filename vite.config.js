import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    base: "/e-plantShopping",
    plugins: [react()],
    build: {
        minify: false, // Disables minification
        terserOptions: { // Ensures Terser doesn't compress or mangle the code
            compress: false,
            mangle: false,
        },
    },
})

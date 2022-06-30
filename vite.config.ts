import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    return {
        server: {
            port: 3000,
        },
        preview: {
            port: 8080,
        },
        build: {
            sourcemap: true,
            outDir: 'build',
            minify: 'esbuild',
        },
        plugins: [react()],
    };
});

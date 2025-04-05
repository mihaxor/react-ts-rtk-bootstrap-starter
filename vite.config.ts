import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'
import Inspect from 'vite-plugin-inspect'
import path from 'path';

export default defineConfig({
    plugins: [
        react(),
        Inspect()
    ],
    server: {
        port: 3000,
        host: true
    },
    preview: {
        port: 3000,
        host: true
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    },
    build: {
        outDir: './build',
        assetsDir: 'static',
        minify: true,
        chunkSizeWarningLimit: 1600
        // moduleResolution: 'bundler',
        // skipLibCheck: true
    },
    css: {
        preprocessorOptions: {
            scss: {
                api: 'modern-compiler'
            }
        }
    }
});

import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react-swc';
import Inspect from 'vite-plugin-inspect';
import checker from 'vite-plugin-checker';
import path from 'path';

const tsChecker = () =>
    process.env.NODE_ENV !== 'production' ? checker({
        typescript: true
    }) : undefined

export default defineConfig({
    plugins: [
        react(),
        Inspect(),
        tsChecker(),
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
    }
});

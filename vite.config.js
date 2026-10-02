import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    base: '/curriculum_portfolio/',
    publicDir: 'src/public'
})

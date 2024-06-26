import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		hmr: true,
	},
	optimizeDeps: {
		include: ['react/jsx-runtime'],
	},
	build: {
		outDir: 'build',
		assetsDir: 'static',
	},
	resolve: {
		alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
	},
});

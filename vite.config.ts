import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), dts()],
	server: {
		hmr: true,
	},
	build: {
		emptyOutDir: true,
		sourcemap: true,
		lib: {
			entry: path.resolve(__dirname, 'index.ts'),
			name: 'react-skeleton-builder',
			fileName: (format) => `index.${format}.js`,
		},
		rollupOptions: {
			external: ['react', 'react-dom'],
			output: {
				globals: {
					react: 'React',
					'react-dom': 'ReactDOM',
				},
			},
		},
	},
	resolve: {
		alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
	},
});

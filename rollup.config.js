import typescript from '@rollup/plugin-typescript';

export default {
	input: 'src/index.ts',
	external: ['react'],
	output: [
		{
			dir: 'dist',
			format: 'es',

			// This disables the warning "Mixing named and default exports"
			exports: 'named',
			/**
			 * This is required to prevent the error:
			 *
			 * TypeError: createContext only works in Client Components.
			 * Add the "use client" directive at the top of the file to use it.
			 *
			 * -----
			 *
			 * Here is the Rollup documentation on `banner`:
			 * A string to prepend/append to the bundle. You can also
			 * supply a function that returns a Promise that resolves
			 * to a string to generate it asynchronously
			 *
			 * (Note: banner and footer options will not
			 * break sourcemaps).
			 */
			banner: "'use client';",
		},
		{
			file: 'dist/index.cjs',
			format: 'cjs',
			exports: 'named',
			banner: "'use client';",
		},
	],
	plugins: [
		typescript({ exclude: ['**/__tests__/**/*', '**/__stories__/**/*'] }),
	],
};
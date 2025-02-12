/// <reference types="vitest" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from 'path'

export default defineConfig({
	plugins: [react()],
	test: {
		environment: "jsdom",
		globals: true,
		setupFiles: './src/test/setup.ts',
		exclude: [
			"**/node_modules/**",
			"**/dist/**",
			"**/.{idea,git,cache,output,temp}/**",
			"**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build}.config.*",
			'**/e2e-tests/**',
		],
	},
	resolve: {
		alias: [
			{ find: '@components', replacement: path.resolve(__dirname, './src/components') },
			{ find: '@pages', replacement: path.resolve(__dirname, './src/pages') },
			{ find: '@services', replacement: path.resolve(__dirname, './src/services') }
		]
	}
});

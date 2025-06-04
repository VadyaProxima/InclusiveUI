const resolve = require('@rollup/plugin-node-resolve')
const commonjs = require('@rollup/plugin-commonjs')
const peerDepsExternal = require('rollup-plugin-peer-deps-external')
const typescript = require('rollup-plugin-typescript2')
const terser = require('@rollup/plugin-terser')

const packageJson = require('./package.json')

module.exports = {
	input: 'src/index.ts',
	output: [
		{
			file: packageJson.main,
			format: 'cjs',
			sourcemap: true,
		},
		{
			file: packageJson.module,
			format: 'esm',
			sourcemap: true,
		},
	],
	plugins: [
		peerDepsExternal(),
		resolve(),
		commonjs(),
		typescript({ useTsconfigDeclarationDir: true }),
		terser(),
	],
}


    

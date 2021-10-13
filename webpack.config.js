const path = require('path');

module.exports = {
	mode: 'development',
	target: 'node',
	entry: './server/index.ts',
	output: {
		path: __dirname,
		filename: 'server.js',
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: 'ts-loader'
			}
		]
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.json']
	}
}
const path = require('path');

module.exports = {
	mode: 'development',
	target: 'node',
	entry: './server/index.ts',
	output: {
		path: path.resolve(__dirname, 'public')
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
		extensions: ['.ts', '.tsx', '.js']
	}
}
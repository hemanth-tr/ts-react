const path = require('path');

const client = {
	mode: 'development',
	entry: './src/index.tsx',
	output: {
		path: path.resolve(__dirname, 'public/js'),
		filename: 'bundle.js',
		clean: true
	},
	module: {
		rules: [
			{
				test: /\.ts?x$/,
				use: 'ts-loader'
			}
		]
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.json']
	}
};

const server = {
	mode: 'development',
	target: 'node',
	entry: './server/index.tsx',
	output: {
		path: __dirname,
		filename: 'server.js',
	},
	module: {
		rules: [
			{
				test: /\.ts?x$/,
				use: 'ts-loader'
			}
		]
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.json']
	}
};

module.exports = [client, server];
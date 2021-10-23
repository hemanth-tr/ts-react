const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const miniCssExtractPlugin = new MiniCssExtractPlugin({
	filename: 'css/bootstrap.css'
});

const client = {
	mode: 'production',
	target: 'web',
	entry: './src/index.tsx',
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'js/bundle.js',
		clean: true
	},
	plugins: [miniCssExtractPlugin],
	module: {
		rules: [
			{
				test: /\.ts?x$/,
				use: 'ts-loader'
			},
			{
				test: /\.s?css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader']
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			}
		]
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.json', '.css']
	}
};

const server = {
	mode: 'production',
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
			},
			{
				test: /\.s?css$/,
				use: 'css-loader'
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			}
		]
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.json', '.css']
	}
};

module.exports = [client, server];
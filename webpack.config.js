var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
	entry: './app/main.ts',
	output: {
		path: path.join(__dirname, './dist'),
		filename: 'app.bundle.js'
	},
	module: {
		loaders: [
			{test: /\.ts$/, loader: 'ts'},
			{test: /\.html$/, loader: 'raw'},
			{test: /\.s?css$/, loaders: ['raw','sass'], exclude: /node_modules/, include: path.join(__dirname, './app/src')}
		]
	},
	resolve: {
		extensions: ['', '.js', '.ts', '.html', '.css']
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './app/index.html'
		})
	],
	devServer: {
		contentBase: path.join(__dirname, './dist'),
		inline: true,
		stats: 'errors-only'
	}
}
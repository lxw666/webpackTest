const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
	CleanWebpackPlugin
} = require('clean-webpack-plugin');
console.log(CleanWebpackPlugin)
const config = {
	entry: {
		index: './src/index.js',
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, './dist'),
	},
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './dist'
	},
	module: {
		rules: [{
			test: /\.css$/,
			use: [
				'style-loader',
				'css-loader',
			]
		}, {
			test: /\.(png|jpg|svg|gif)$/,
			use: [
				'file-loader'
			]
		}]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: 'webpack test'
		})
	]
};
module.exports = config;

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
	CleanWebpackPlugin
} = require('clean-webpack-plugin');
const webpack = require('webpack');
console.log(CleanWebpackPlugin)
const config = {
	mode: "production",
	devServer: {
		open: true,
		hot: true,
		contentBase: path.join(__dirname,'dist'),
		port: 8081
	},
	entry: {
		index: './src/index.js',
	},
	output: {
		filename: '[name].[hash].bundle.js',
		path: path.resolve(__dirname, './dist'),
		publicPath: '/'
	},
	devtool: 'inline-source-map',
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
		}),
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin()
	]
};
module.exports = config;

/* 
 *webpack 生产环境配置
 */

// process.env.NODE_ENV = 'production';
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const config = (env, argv) => {
	console.log('webpack.prod.env', env, argv)
	return {
		mode: "production",
		module: {
			rules: [{
				test: /\.css$/,
				include: path.resolve(__dirname, "../src"),
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: 'css-loader'
				})
			}]
		},
		plugins: [
			new webpack.HashedModuleIdsPlugin(),
			new ExtractTextPlugin({
				filename: (getPath) => {
					return getPath('assets/css/[name].[hash].css')
				},
				allChunks: true
			}),
		]
	}
};
module.exports = (env, argv) => {
	return merge(common(env, argv), config(env, argv));
}

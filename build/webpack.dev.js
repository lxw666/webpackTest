/* 
 *webpack 开发环境配置
 */

const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const config = (env,argv) => {
	console.log('webpack.dev.env',env,argv)
	return{
		mode: "development",
		devServer: {
			contentBase: path.join(__dirname, '../dist'),
			open: true,
			hot: true,
			host: "192.168.43.21",
			port: 8081,
		},
		module: {
			rules: [{
				test: /\.css$/,
				include: path.resolve(__dirname,"../src"),
				use: [{
					loader: 'style-loader'
				},{
					loader: 'css-loader'
				}]
			}]
		},
		plugins: [
			new webpack.NamedModulesPlugin(),
			new webpack.HotModuleReplacementPlugin()
		]
	}
}
module.exports = (env,argv) => {
	return merge(common(env,argv),config(env,argv));
}

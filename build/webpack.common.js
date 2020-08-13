/* 
 *webpack 公共配置
 */

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
	CleanWebpackPlugin
} = require('clean-webpack-plugin');
console.log('process.env.NODE_ENV', process.env.NODE_ENV)
const config = (env,argv) => {
	console.log('webpack.common.env', env)
	const isProdEnv = process.env.NODE_ENV === 'production';
	return {
		entry: {
			index: './src/index.js',
		},
		output: {
			filename: isProdEnv ? 'assets/js/[name].[chunkhash].bundle.js' : 'assets/js/[name].[hash].bundle.js',
			path: path.resolve(__dirname, '../dist'),
			publicPath: process.env.ASSET_PATH || '',//设置静态资源的公共路径
		},
		resolve: {
			alias: {
				/* 将模块设置别名，方便在import，require中引用，形如vue将src/设置成@ */
				'@': path.resolve(__dirname,'../src/'),
			},
		},
		devtool: isProdEnv ? 'source-map' : 'inline-source-map',
		module: {
			rules: [{
				test: /\.(png|jpg|svg|gif)$/,
				include: path.resolve(__dirname, "../src"),
				use: [
					'file-loader'
				]
			}]
		},
		performance: {
			hints: 'error',
			maxAssetSize: 1024 * 200,//限制大小200kb
			assetFilter: (assetFilename) => {
				return /\.(png|jpg|svg|gif)$/.test(assetFilename);
			}
		},
		plugins: [
			new CleanWebpackPlugin(),
			new HtmlWebpackPlugin({
				title: 'webpack test'
			}),
			new webpack.DefinePlugin({
				'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),//全局化process.env.NODE_ENV,与最外层的package.json保持同步
				'SERVICE_URL': JSON.stringify("http://dev.example.com"),//根据不同环境可以添加不同的请求地址
			})
		],
		optimization: {
			splitChunks: {
				chunks: 'all'
			}
		}
	}
};
module.exports = config;

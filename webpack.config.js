const path = require('path');
console.log(path, __dirname)
const config = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'main.bundle.js'
	},
	module: {
		rules: [{
			test: /\.css$/,
			use: [
				'style-loader',
				'css-loader',
			]
		},{
			test: /\.(png|jpg|svg|gif)$/,
			use: [
				'file-loader'
			]
		}]
	}
};
module.exports = config;

const path = require('path');
console.log(path,__dirname)
const config = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname,'./dist/js'),
		filename: 'main.bundle.js'
	}
};
module.exports = config;
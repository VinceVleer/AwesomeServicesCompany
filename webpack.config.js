const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: './src/assets/js/index.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist/assets/js')
	},
	plugins: [
		new CopyWebpackPlugin([
			{from:'src/assets/img',to:'../img/'},
			{from:'src/assets/js/jquery-3.3.1.min.js',to:'../js/'},
			{from:'src/index.html',to:'../../'},
		]), 
	],
};

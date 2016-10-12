var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: [
		'webpack/hot/dev-server',
		'webpack-dev-server/client?http://localhost:8080',
		path.resolve(__dirname, 'app/main.js'),
	],	
	module: {
		loaders: [
			{
				test: /\.jsx?$/, //js 或 jsx 文件
				exclude: /(node_modules|bower_components)/,
				loader: 'babel',
				query: {
					presets: ['react', 'es2015'], //告诉babel使用什么方法解析
				}
			}
		]
	},
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js',
	},
	//plugins: [new htmlWebpackPlugin], //新生成html文件
};

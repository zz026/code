const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		filename: 'bundle.js'
	},
	devServer: {
		port: '3000',
		open: true,
		hot: true,
		contentBase: './dist'
	},
	// module: {
	// 	rules: [
	// 		{
	// 			test: /\.js$/,
	// 			use: {
	// 				loader: 'babel-loader',
	// 				options: {
	// 					presets: ['@babel/preset-env']
	// 				}
	// 			}
	// 		}
	// 	]
	// },
	plugins: [
		new HtmlWebpackPlugin({
			template: 'index.html'
		})
	]
}
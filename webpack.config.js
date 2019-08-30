const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: './src/index.ts',
	mode: 'production',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'material-ui-final-form.min-v4.js',
		library: 'material-ui-final-form',
    libraryTarget: 'umd'
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: [
					{loader: 'ts-loader'},
				],
				include: [
					path.resolve(__dirname, 'src'),
				],
			},
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
		}),
	],
	resolve: {extensions: ['.ts', '.tsx']},
	externals: [
		/^@material-ui/,
		'react',
		'react-dom'
	],
};

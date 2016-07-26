import webpack from 'webpack';
import path from 'path';

export default {
	debug: true,
	devtool: 'cheap-module-eval-source-map',
	noInfo: false,
	entry: [
		'eventsource-polyfill',
		'webpack-hot-middleware/client?reload=true',
		'./app/app'
	],
	target: 'web',
	output: {
		path: __dirname + '/dist',
		publicPath: '/',
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: './app'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],
	module: {
		loaders: [
			{ test: /\.js$/, include: path.join( __dirname, 'app' ), loaders: [ 'babel' ] },
			{ test: /\.html$/, loader: 'raw-loader' },
			{ test: /(\.css)$/, loaders: [ 'style', 'css' ] },
			{ test: /(\.scss)$/, loaders: [ 'style', 'css', 'sass' ] },
			{ test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
			{ test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000' },
			{
				test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
				loader: 'url?limit=10000&mimetype=application/octet-stream'
			},
			{ test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' },
			{
    		test: /.*\.(gif|png|jpe?g|svg)$/i,
    		loaders: [
      				'file?hash=sha512&digest=hex&name=[hash].[ext]',
      				'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
    					]
  			}
		]
	}
};

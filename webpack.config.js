const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack')
const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
	entry: ['./src/index.jsx', './src/scripts/imports.js'],
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	devServer: {
		contentBase: path.join(__dirname, "dist"),
  		compress: true,
		port: 3000
	},
	resolve: {
      alias: {
         jquery: "jquery/src/jquery"
      }
    },
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
				  		presets: ['es2015', 'react', 'stage-2'],
					}
				}
			},
			{
				test: /\.(jpe?g|png|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/, 
				loader: 'file-loader?name=./fonts/[name].[ext]'
			},
			{
				test: /\.(png|svg|jpe?g|gif|ico)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 10000,
							outputPath: 'images/',
	                        name: '[path][name].[ext]'
						}
					},
					{
						loader: 'file-loader',
						options: {
							include: path.resolve(__dirname, 'src'),
							outputPath: 'images/',
							name: '[name].[ext]'
						} 
					}
				] 			
			}, 
			{
				test: /(\.css|\.scss)$/,
				exclude: /node_modules/,
				use: [
					devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
		        	{
		        		loader: "css-loader",
		        		options: { 
		        			minimize: true,
                     sourceMap: true
		        		}
		        	},
		        	{
		        		loader: "sass-loader"
		        	}, 
		        	{
						loader: 'sass-resources-loader',
			          options: {
			            resources: ['./src/style/_variables.scss', './src/style/global.scss'],
						}
		        	}	
	        	]
		      
			},
			{
	            test: /[\/\\]node_modules[\/\\]some-module[\/\\]index\.js$/,
	            loader: "imports-loader?this=>window"
        	}
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
	      filename: "main.css",
	      chunkFilename: "[id].css"
	    }),
		new BrowserSyncPlugin({
	      host: 'localhost',
	      files: [
				'./**/*.html',
				'./*.html',
				'./**/*.js',
				'./*.js',
				'./**/*.scss',
				'./*.scss',
				'./**/*.css',			
				'./*.css'			
			],
			port: 9000,
			server: { baseDir: ['dist'] } 
	    }),
	    new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'src/index.html',
			title: 'Question ABC',
			minify: {
				collapseWhitespace: true
			}
		}),
		new webpack.ProvidePlugin({
			'window.jQuery': 'jquery',
			'window.$': 'jquery',
			'jQuery': 'jquery',
			'$': 'jquery'
        })
	]
}

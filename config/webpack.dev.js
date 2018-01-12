const path = require("path");
const webpack = require("webpack")
const webpackMerge = require("webpack-merge");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require("autoprefixer");
const precss = require("precss");

const baseConfig = require("./webpack.base.js");
const config = require("./config");
const port = config.port;

module.exports = function(env){
	console.log(`
#################################################
  Server is listening at: http://localhost:${config.port} 
#################################################
	`);
	return webpackMerge(baseConfig(env),{
		entry:[
		    "react-hot-loader/patch",
	        "webpack-dev-server/client?http://localhost:" + port,
		    "webpack/hot/only-dev-server",
			path.resolve(__dirname,"../src/main.js"),
		],
		plugins:[
			new webpack.HotModuleReplacementPlugin(),
            new HtmlWebpackPlugin({
                title: 'index',
                template: path.resolve(__dirname,"../src/index.html"),
                filename: 'index.html',
                hash: true,
                inject: true
            }),
			new webpack.LoaderOptionsPlugin({
				options:{
					postcss(){
						return[precss, autoprefixer];
					}
				}
			})
		],
        devServer:{
			hot:true,
			port:config.port,
			historyApiFallback:true,
            proxy: [{ // proxy URLs to backend development server
                context: ["/rms"],
                target: "http://192.168.1.244:8080",
            }],
		},
        devtool: "cheap-module-source-map"
    })
}
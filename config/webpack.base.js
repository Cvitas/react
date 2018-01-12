const path = require("path")
const webpack = require("webpack")
const config = require("./config");
const publicPath = config.publicPath;

module.exports = function(env){
	return{
		entry:{
			main:path.resolve(__dirname,"../src/main.js"),
		},
		output: {
			path:path.resolve(__dirname,"../dist"),
            sourceMapFilename: "[name].map",
            filename:(env === "dev")?"[name].js":"[name].[hash:16].js",
            publicPath,
        },
        resolve: {
            extensions: [".js", ".json"],
            modules: [path.join(__dirname, "../src"), "node_modules"],
			alias:{
                static:path.join(__dirname, "../static/"),
                urls:path.join(__dirname, "../static/js/url"),
                api:path.join(__dirname, "../static/js/api"),
			}
        },
        module:{
			loaders:[
				{
					test:/\.jsx?$/,
					use:["babel-loader"],
					exclude:"/node_modules/"
				},
				{ 
					test: /\.(png|jpg|gif)$/, 
					use: ["url-loader?limit=20000&name=images/[hash:16].[ext]"], 
					exclude: "/node_modules/" 
				},
				{ 
					test: /\.scss$/,
					use: ["style-loader","css-loader?modules","postcss-loader","sass-loader"], 
					exclude: ["/node_modules/",path.resolve(__dirname,"../static/css")]
				},
				{ 
					test: /\.scss$/,
					use: ["style-loader","css-loader","postcss-loader","sass-loader"], 
					include: [path.resolve(__dirname,"../static/css")]
				},
			],
		},
	}
}
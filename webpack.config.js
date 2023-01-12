const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

let mode = "development";
let target = "web";
if (process.env.NODE_ENV === "production") {
	mode = "production";
	target = "browserlist";
};

const plugins = [
	new HtmlWebpackPlugin({
		template: "./src/index.html",
	}),
	new MiniCssExtractPlugin({
		filename: "[name].[contentHash].css",
	}),
];

if (process.env.SERVE) {
	plugins.push(new ReactRefreshWebpackPlugin());
}

module.exports = {
	mode,
	target,
	plugins,
	entry: "./src/index.js",
	
	devtool: "eval-cheap-module-source-map",
	devServer: {
		hot: true,
		historyApiFallback: true,
	},

	output: {
		path: path.resolve(__dirname, "dist"),
		assetModuleFilename: "assets/[hash][ext][query]",
		clean: true,
		publicPath: "/",
	},

	module: {
		rules: [
			{ test: /\.(html)$/, use: ["html-loader"] },
			{
				test: /\.(s[ac]|c)ss$/i,
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader",
					"postcss-loader",
					"sass-loader",
				],
			},
			{
				test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
				type: mode === "production" ? "asset" : "asset/resource"
			},
			{
				test: /\.(woff2?|eot|ttf|otf)$/i,
				type: "asset/resource",
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						cacheDirectory: true,
					},
				},
			},
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						cacheDirectory: true,
					},
				},
			},
		],
	},
};

var path = require("path");
var webpack = require("webpack");

module.exports = {
  entry: './example.js',
  output: {
    path: path.join(__dirname, "js"),
    filename: "output.js",
    publicPath: "/js/"
  },
	plugins: [
		new webpack.DllReferencePlugin({
			context: path.join(__dirname, "..", "dll"),
			manifest: require("./dll/js/alpha-manifest.json") // eslint-disable-line
		}),
		new webpack.DllReferencePlugin({
			scope: "beta",
			manifest: require("./dll/js/beta-manifest.json"), // eslint-disable-line
			extensions: [".js", ".jsx"]
		})
	]
};

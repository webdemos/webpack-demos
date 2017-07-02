// var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

const webpack = require('webpack');

module.exports = {
  entry: {
    bundle1: './main1.jsx',
    bundle2: './main2.jsx'
  },
  output: {
    filename: '[name].js'
  },
  module: {
    loaders:[
      { test: /\.js[x]?$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' },
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "commons",
      children: true,
      async: true
    }),
    // new CommonsChunkPlugin({
    //   name: 'init',
    //   filename: "init.js",
    //   minChunks: 2
    // })
  ]
};

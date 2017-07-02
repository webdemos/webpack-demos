var webpack = require('webpack');

module.exports = {
  entry: {
    vendor: ['jquery'],
    app: './main.js'
  },
  output: {
    filename: '[name].js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor"
    })
  ]
};

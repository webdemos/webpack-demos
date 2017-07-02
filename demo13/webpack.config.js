var webpack = require('webpack');

module.exports = {
  entry: {
    app: './main.js',
    vendor: ['jquery']
  },
  output: {
    filename: '[name].js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      // name: "vendor",
      // filename: /* filename= */'vendor.js',
      names: ["common", "vendor"],
      minChunks: 2,
      children: true
    })
  ]
};

module.exports = {
  entry: './main.jsx',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders:[
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
<<<<<<< HEAD
        loader: 'babel-loader?presets[]=es2015&presets[]=react',
=======
        loader: 'babel-loader?presets[]=es2015&presets[]=react'
>>>>>>> init
      },
    ]
  }
};

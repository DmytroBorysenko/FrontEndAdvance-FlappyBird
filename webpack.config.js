const path = require('path');
const hwp = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: 'build.js',
    path: path.join(__dirname, 'dist')
  },
  plugins:[
    new hwp({template:path.join(__dirname, './src/index.html')})
  ],
  devtool: "source-map",

  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
      
    ]
  }
  
};
const path = require('path');
const devMode = process.env.MODE_ENV !== 'production';
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'public/build'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ MiniCssExtractPlugin.loader, {loader:'css-loader', options:{sourceMap: true, url:false}}]
      },
      {
        test:/\.jsx?$/,
        exclude: /node_modules/,
        loader:'babel-loader'
      }
    ]
  },
  resolve:{
    extensions: ['.js', '.jsx']
  },
  plugins:[
    new MiniCssExtractPlugin({
      filename:"index.css"
    })
  ],
  watchOptions:{
    poll:1000
  },
  devtool: 'source-map',
  mode : devMode ? 'development' : 'production'
};
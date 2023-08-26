// import path from 'path'; 
// import nodeExternals from 'webpack-node-externals'
const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = 
// export default
 {
  entry: './server.js',
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: path.resolve('server-build'),
    filename: 'server.js'
  },
  module: {
    rules: [
        {
            test: /\.m?js/,
            type: "javascript/auto",
          },
          {
            test: /\.m?js/,
            resolve: {
              fullySpecified: false,
            },
          },
          {
            test: /\.js?$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env', '@babel/preset-react'],
              },
            },
          },
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'], // Add this CSS loader configuration
          },
    ]
  }
};
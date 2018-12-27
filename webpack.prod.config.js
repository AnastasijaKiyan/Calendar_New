// const fs = require("fs");
// const path = require(" path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const SRC_DIR = __dirname + '/src';
const DIST_DIR = __dirname + '/build';

module.exports = {
  entry: [
    SRC_DIR + '/index.tsx'
  ],
  output: {
    path: DIST_DIR,
    filename: 'bundle.min.js'
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        // exclude: /node_modules/,
        use: ['babel-loader', 'ts-loader']
      },
      {
        test: /\.(sass|css)$/,
        // exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.(jpg|jpeg|gif|png)$/,
        exclude: /\/node_modules\//,
        use: {
          loader: "file-loader",
          options: {
            name: "[path][name].[ext]"
          }
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg|otf)$/,
        exclude: /\/node_modules\//,
        use: {
          loader: "file-loader",
          options: {
            name: "style/fonts/[name].[ext]"
          }
        }
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  plugins: [
    new ExtractTextPlugin("./style/style.css"),
  ]
};
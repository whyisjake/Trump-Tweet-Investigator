const path = require("path");
const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  mode: "production",
  plugins: [
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new CopyWebpackPlugin([
      {
        from: "*",
        to: path.resolve(__dirname, "dist"),
        ignore: [
          "key.pem",
          "npm-debug.log*",
          "package-*.json",
          "release.zip",
          "trump.crx"
        ]
      }
    ])
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "content.js"
  }
};

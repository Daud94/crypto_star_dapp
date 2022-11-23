const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new CopyWebpackPlugin(
          [{ from: "./src/index.html", to: "index.html" }]
    ),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist")
    },
    hot: true
    },
  mode: 'development'
};

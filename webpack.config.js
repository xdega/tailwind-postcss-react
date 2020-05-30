const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const PurgecssPlugin = require("purgecss-webpack-plugin");
const webpack = require("webpack");
const path = require("path");
const glob = require("glob");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(process.cwd(), "dist"),
  },
  resolve: {
    extensions: [".jsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        use: "babel-loader",
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
          {
            loader: "postcss-loader",
            options: {
              plugins: [require("tailwindcss")(), require("autoprefixer")()],
            },
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "assets/",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin({
      verbose: true,
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
    new PurgecssPlugin({
      paths: glob.sync(path.join(__dirname, "src", "**/*"), { nodir: true }),
    }),
  ],
};

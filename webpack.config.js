const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
  mode: "development",
  entry: {
    home: "./src/index.js",
    catalog: "./src/pages/catalog/index.js",
    favourites: "./src/pages/favourites/index.js",
    cart: "./src/pages/cart/index.js",
    poster: "./src/pages/posters/american-architecture/index.js"
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
    hot: true,
  },
  plugins: [
    new FaviconsWebpackPlugin('./src/assets/icons/favicon.svg'),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html", 
      chunks: ["home"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/catalog/index.html",
      filename: "catalog/index.html", 
      chunks: ["catalog"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/favourites/index.html",
      filename: "favourites/index.html", 
      chunks: ["favourites"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/cart/index.html",
      filename: "cart/index.html", 
      chunks: ["cart"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/posters/american-architecture/index.html",
      filename: "posters/american-architecture/index.html", 
      chunks: ["poster"],
    }),
    new webpack.ProvidePlugin({
      typography: './src/styles/typography.scss',
      colors: './src/styles/colors.scss',
    }),
  ],
  module: {
    rules: [
      {
        test: [/\.css$/i, /\.scss$/i],
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.html$/,
        use: ['html-loader'], 
      },
    ],
  },
  
  // optimization: {
  //     runtimeChunk: 'single',
  //   },
  
};

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: {
    home: "./src/index.js",
    catalog: "./src/pages/catalog/index.js",
    profilesettings: "./src/pages/profilesettings/index.js",
    favourites: "./src/pages/favourites/index.js",
    cart: "./src/pages/cart/index.js",
    poster: "./src/pages/posters/american-architecture/index.js",
    person: "./src/pages/people/miron_dis/index.js",
    create: "./src/pages/create/index.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    publicPath: '/material/'
  },
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
    hot: true,
  },
  plugins: [
    new FaviconsWebpackPlugin('./src/assets/icons/favicon.svg'),
    // new MiniCssExtractPlugin(),
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
    new HtmlWebpackPlugin({
      template: "./src/pages/people/miron_dis/index.html",
      filename: "people/miron_dis/index.html", 
      chunks: ["person"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/profilesettings/index.html",
      filename: "profilesettings/index.html", 
      chunks: ["profilesettings"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/create/index.html",
      filename: "create/index.html", 
      chunks: ["create"],
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
          // MiniCssExtractPlugin.loader,
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

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MinicssExtractPlugin = require("mini-css-extract-plugin");
const fileLoader = require("file-loader");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
module.exports = {
  entry: [
    "./src/gsap/gsap.min.js",
    "./src/gsap/animation.js",
    "./src/swiper/swiper.js",
    "./src/main.js",
  ],

  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "/index.html",
      inject: "body",
    }),

    new MinicssExtractPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        include: "/style/sass/main.css",
        use: [MinicssExtractPlugin.loader, "css-loader"],
      },

      {
        test: /\.(gif|png|jpe?g)$/,
        type: "asset",
      },
      {
        test: /\.html$/,
        use: ["html-loader"],
      },

      // {
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   loader: "eslint-loader",
      // },
    ],
  },
};

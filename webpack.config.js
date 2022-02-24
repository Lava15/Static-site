const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const fileLoader = require("file-loader");
module.exports = {
  entry: [
    "./src/gsap/gsap.min.js",
    "./src/gsap/animation.js",
    "./src/swiper/swiper.js",
    "./src/main.js",
  ],

  plugins: [
    new HtmlWebpackPlugin({
      template: "/index.html",
      inject: "body",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,

        use: ["style-loader", "css-loader"],
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
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
};

const miniCssExtractPlugin = require("mini-css-extract-plugin");

const path = require("path");
const mode =
  process.env.NODE_ENV === "production" ? "production" : "develpment";
module.exports = {
  entry: {
    main: "./src/main.js",
  },
  mode: mode,
  output: {
    filename: "[name]-bundle.js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: "/",

    rules: [
      {
        test: /\.css$/i,
      },
    ],
  },
  devServer: {
    contentBase: "dist",
  },
};

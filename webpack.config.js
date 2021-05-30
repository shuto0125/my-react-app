const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src/app.tsx"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "app.js",
  },
  resolve: {
    modules: [path.resolve(__dirname, "node_modules")],
    // extensions: [".js", ".jsx"],
    extensions: [".ts", ".tsx", ".js"], // ts, tsx追加、jsx削除
  },
  module: {
    rules: [
      {
        // test: [/\.js$/, /\.jsx$/],
        test: [/\.ts$/, /\.tsx$/],
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-react",
                "@babel/preset-typescript", // <- 追加
              ],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/index.html"),
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
  },
};

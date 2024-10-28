const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports= {
    mode: "development",
    entry: {
      index: "./src/scripts/index.js",    
      home: "./src/scripts/home.js"       
  },
    output: {
      filename: "[name].bundle.js",
      path: path.resolve(__dirname, "dist"),
      clean: true,
    },
    devtool: "eval-source-map",
    devServer: {
      watchFiles: ["./src/pages/template.html"],
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: "./src/pages/template.html",
        }),
        new HtmlWebpackPlugin({
          template: "./src/pages/home.html",
          filename:"home.html",
        }),
      ],
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
};
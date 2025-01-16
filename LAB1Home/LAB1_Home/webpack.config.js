const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js", // Điểm bắt đầu
  output: {
    path: path.resolve(__dirname, "dist"), // Thư mục build
    filename: "bundle.js", // Tên file bundle
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Load tất cả các file .js
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/, // Load tất cả các file .css
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // File HTML template
    }),
  ],
  devServer: {
    static: "./dist", // Thư mục nội dung
    hot: true, // Kích hoạt HMR
    open: true, // Mở trình duyệt sau khi chạy server
  },
};

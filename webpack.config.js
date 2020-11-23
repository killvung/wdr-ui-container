const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack").container.ModuleFederationPlugin;
const path = require("path");

module.exports = (env) => {
  const WDR_UI_WRITE_URL_DEV = "wdr_ui_write@http://localhost:8081/remoteEntry.js";
  const WDR_UI_WRITE_URL_PROD = "wdr_ui_write@https://wdr-write.netlify.app/remoteEntry.js";

  const WDR_UI_REPORT_URL_DEV = "wdr_ui_report@http://localhost:8082/remoteEntry.js";
  const WDR_UI_REPORT_URL_PROD = "wdr_ui_report@https://wdr-report.netlify.app/remoteEntry.js";

  return {
    entry: "./src/index",
    devServer: {
      contentBase: path.join(__dirname, "dist"),
      port: 8080,
    },
    output: {
      publicPath: "auto",
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js"],
    },
    module: {
      rules: [
        {
          test: /bootstrap\.tsx$/,
          loader: "bundle-loader",
          options: {
            lazy: true,
          },
        },
        {
          test: /\.tsx?$/,
          loader: "babel-loader",
          exclude: /node_modules/,
          options: {
            presets: ["@babel/preset-react", "@babel/preset-typescript"],
          },
        },
      ],
    },
    plugins: [
      new ModuleFederationPlugin({
        name: "wdr_ui_container",
        remotes: {
          "wdr_ui_write": WDR_UI_WRITE_URL_PROD,
          "wdr_ui_report": WDR_UI_REPORT_URL_PROD,
        },
        shared: ["react", "react-dom"],
      }),
      new HtmlWebpackPlugin({
        template: "./public/index.html",
      }),
    ]
  }
};

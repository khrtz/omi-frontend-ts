const webpack = require("webpack")
const path = require("path")

const MODE = process.env.NODE_ENV || "development"
const DEV = MODE == "development"

module.exports = {
  mode: MODE,
  devtool: DEV ? "inline-source-map" : "source-map",
  entry: {
    main: [__dirname + "/src/index.tsx"]
  },
  output: {
    path: __dirname + "/public",
    filename: "main.js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  devServer: {
    contentBase: 'public/',
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true
            }
          }
        ]
      },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(MODE),
      "process.env.DEBUG": JSON.stringify(process.env.DEBUG || DEV)
    }),
  ]
}
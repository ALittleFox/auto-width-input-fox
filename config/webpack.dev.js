const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: {
    main: path.resolve(__dirname, '../demo/index.tsx')
  },
  mode: 'development',
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        use: [
          { loader: 'babel-loader' },
        ]
      },
      {
        test: /\.ts[x]?$/,
        exclude: /node_modules/,
        use: [
          { loader: 'ts-loader' },
          
        ]
      },
      // {
      //   test: /\.css$/,
      //   use:['style-loader','css-loader']
      // },
      {
        test: /\.g.css$/,
        use: [
          { loader: 'style-loader' },
          
          {
            loader: 'css-loader',
          }
        ]
      },
      {
        test: /\.module.css$/,
        use: [
          
          {loader:'style-loader'},
          {loader:"@teamsupercell/typings-for-css-modules-loader"},
          {
            loader: "css-loader",
            options: {
              modules: true,
              modules: {
                localIdentName: 'fox-[local]',
              },
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg|mp4)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'img/[name]-[hash:8].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 8192,
          name: 'font/[name]-[hash:8].[ext]'
        }
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js','.json' ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../demo/index.html')
    })
  ],
  devServer: {
    port: 9715,
    open: true
  }
}
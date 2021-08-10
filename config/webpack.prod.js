const path = require('path')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: {
    main: path.resolve(__dirname, '../src/index.tsx')
  },
  output: {
    filename: "index.js",
    libraryTarget: 'umd',
    path: path.resolve(__dirname, '../dist/')
  },
  // externals: [
  //   /^react\/.+$/, 
  //       /^react-dom\/.+$/, 
  //       /^lodash\/.+$/,
  //       /^@babel\/runtime\/.+$/
  // ],
  externals: {
    'react': 'React',
    'react-dom':'ReactDom'
  },
  // mode: 'development',
  // devtool: '#cheap-module-eval-source-map',
  mode: 'production',
  devtool: 'source-map',
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
}
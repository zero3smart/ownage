const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const dotenv = require('dotenv').config();

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'react-hot-loader/patch',
    path.join(__dirname, '/src/index.js')
  ],
  target: 'web',
  mode: 'development',
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  devServer: {
    hot: true,
    inline: true,
    historyApiFallback: true,
    contentBase: [
      path.join(__dirname, '/src/assets'),
      path.join(__dirname, '/src/components'),
      path.join(__dirname, '/node_modules'),
      path.join(__dirname, '/bower_components')
    ]
  },
  plugins: [
    new HardSourceWebpackPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'ownage',
      filename: 'index.html',
      template: 'src/index.html',
      inject: 'body',
      favicon: 'public/favicon.ico',
      hash: true,
      cache: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true
      }
    }),
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        API_URL: JSON.stringify(process.env.API_URL)
      }
    })/*,
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    })*/
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: ['babel-loader']
      },
      {
        test: /\.eot(\?v=\d+.\d+.\d+)?$/,
        use: ['file-loader']
      },
      {
        test: /(\.css|\.scss|\.sass)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          }, {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                require('autoprefixer')
              ],
              sourceMap: true
            }
          }, {
            loader: 'sass-loader',
            options: {
              includePaths: [path.resolve(__dirname, 'src', 'scss')],
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /.*\.(gif|png|jpe?g|woff2|woff|ttf|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8000,
            },
          },
        ]
      },
      {
        test: /\.tsv$/,
        include: [
          path.join(__dirname, 'src/data')
        ],
        loaders: ["dsv-loader"]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.json']
  },
  node: {
    net: 'empty',
    dns: 'empty',
    fs: 'empty'
  }
}

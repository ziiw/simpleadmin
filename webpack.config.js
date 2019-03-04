const webpack = require('webpack')
const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    app: './index.js'
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/'
  },
  devtool: 'eval-source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, './src'),
    hot: true
  },
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    alias: {
      Views: path.resolve(__dirname, 'src/views/'),
      Layouts: path.resolve(__dirname, 'src/layouts/'),
      Components: path.resolve(__dirname, 'src/components/'),
      Reducers: path.resolve(__dirname, 'src/reducers/'),
      Actions: path.resolve(__dirname, 'src/actions/'),
      Stores: path.resolve(__dirname, 'src/stores/')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env'],
            plugins: ['transform-object-rest-spread']
          }
        }]
      }, {
        test: /\.styl$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          },
          'stylus-loader'
        ]
      }, {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader?name=[name].[ext]&outputPath=assets/fonts/'
        ]
      }, {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader?name=[path][name]-[hash:6].[ext]&outputPath=assets/images/'
        ]
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({template: 'index.html'}),
    new ExtractTextPlugin('styles.css'),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module) {
        // this assumes your vendor imports exist in the node_modules directory
        return module.context && module.context.indexOf('node_modules') !== -1
      }
    }),
    // CommonChunksPlugin will now extract all the common modules from vendor and main bundles
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest' // But since there are no more common modules between them we end up with just the runtime code included in the manifest file
    })
  ]
}

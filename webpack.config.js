const webpack = require('webpack')
const path = require('path')

module.exports = (env) => {
  console.log(env.NODE_ENV)

  return {
    entry: __dirname + '/src/index.js',
    devtool: 'source-map',
    output: {
      path: __dirname + '/lib',
      filename: 'index.min.js',
      library: 'rp-toggle',
      libraryTarget: 'umd',
      umdNamedDefine: true
    },
    module: {
      rules: [
        {
          test: /(\.jsx|\.js)$/,
          loader: 'babel-loader',
          exclude: /(node_modules|bower_components)/
        }
      ]
    },

    externals: ['react'],

    resolve: {
      modules: [path.resolve('./node_modules'), path.resolve('./src')],
      extensions: ['.json', '.js']
    },
    plugins: [
      new webpack.DefinePlugin({
        PROD: JSON.stringify(env.NODE_ENV === 'production'),
        DEV: JSON.stringify(env.NODE_ENV === 'development')
      })
    ]
  }
}

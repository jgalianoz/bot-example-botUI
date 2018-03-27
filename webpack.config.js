const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, './built')
  },
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.min.js',
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
        query: {
          presets: ['latest'],
        },
      },
    ]
  }
}

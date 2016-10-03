module.exports = {
  entry: './index.js',
  output: {
    path: './',
    filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    port: 4444,
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_moduels/,
        loader:'babel',
        query: {
          presets: ['es2015','react']
        }
      }
    ]
  }
}

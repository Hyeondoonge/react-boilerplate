const path = require('path');

module.exports = {
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Analogue Clock'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  }
};

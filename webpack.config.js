var path = require('path');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, 'static/js'),
        filename: "bundle.js"
    },
    module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    }]
  }
};
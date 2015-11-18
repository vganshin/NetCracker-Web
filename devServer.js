var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.dev');
var proxy = require('express-http-proxy');

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('/static/*', function(req, res) {
	res.sendFile(path.join(__dirname, req.path))
});

app.use('/api', proxy('localhost:8080', {
  forwardPath: function(req, res) {
    return require('url').parse(req.url).path;
  }
}));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});


app.listen(3000, '0.0.0.0', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at 🌎  http://localhost:3000');
});

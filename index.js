var gzippo = require('gzippo');
var express = require('express');
var morgan = require('morgan');
var app = express();
var path = require('path')
var port = process.env.PORT ? process.env.PORT : 9090;
var sendIndex =  function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
}
var redirectoHome = function(req, res) {
  res.redirect('/');
}

app.use(morgan('dev'))

app.use('/assets', gzippo.staticGzip(__dirname + "/assets/" , {
  maxAge: 0,
  clientMaxAge: 0
}))

app.get('/', sendIndex)

app.get('*', redirectoHome)
app.post('*', redirectoHome)
app.head('*', redirectoHome)


app.listen(port);

console.log("Server started listening on PORT: " + port);


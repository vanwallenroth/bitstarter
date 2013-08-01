var express = require('express');
var app = express();
var fs = require('fs');
app.use(express.logger());

app.get('/', function(request, response) {
  var buffer = new Buffer(fs.readFileSync('index.html'));
  //response.send('Hello World 2!');
  response.send(buffer.toString('utf8' ));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

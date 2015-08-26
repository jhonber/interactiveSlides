var express = require('express');
var io = require('socket.io')();

require('./demo')(io);


var port = 8888;
var app = express();

/*app.get('/', function (req, res) {
  res.send('socket.io');
});
*/
app.use(express.static(__dirname + '/'));

var server = app.listen(port, function() {
  console.log('Express server listening on port ' + server.address().port);
})
io.attach( server );

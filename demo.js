
module.exports = function (io) {
  var users = {};
  var usersCnt  = 0;

  io.on('connection', function (socket) {
    console.log(socket)
    socket.on('keyEvent', function (data) {
      if (data.username == 'jhonber') {
        socket.emit('keyEvent', data.key);
      }
    });

  });

}

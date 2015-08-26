
module.exports = function (io) {
  var users = {};
  var numUsers  = 0;

  io.on('connection', function (socket) {
    var added = false;
    console.log("new connection");

    socket.on('keyEvent', function (data) {
      console.log(socket.username)
      if (socket.username == 'jhonber') {
        socket.broadcast.emit('keyEvent', data);
      }
    });

    socket.on('new user', function (username) {
      console.log('user added: ', username)

      socket.username = username;
      users[username] = username;
      numUsers ++;
      added = true;

      socket.emit('login', {
        ok: true,
        numUsers: numUsers
      });
    });

  });

  io.on('disconnect', function() {
    if (added) {
      delete user[socket.username];
      numUsers --;
    }
  });

}

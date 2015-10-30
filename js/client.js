var socket = io();

$("#username").keypress(function( event ) {
  if (event.which == 13) {
    var username = document.getElementById('username').value;
    if (username) login(username);
  }
});

function login (username) {
  socket.emit('new user', username);
}

socket.on('keyEvent', function (data) {
  document.location.href = data.url;
});

socket.on('login', function (data) {
  if (data.ok) {
    document.getElementById('source').style.display = "block";
    document.getElementById('login').style.display = "none";
    var slideshow = remark.create();
  }
  else alert('User "' + data.username + '" is already used.');
});

socket.on('new user', function (data) {
  document.getElementById('viewers').style.display = "block";
  document.getElementById('viewers').innerHTML = data.numUsers;
});

$(function () {
  document.getElementById('source').style.display = "none";
  document.getElementById('viewers').style.display = "none";

}).keyup(function(e) {
  var url = document.location.href;

  if (e.keyCode == 37 || e.keyCode == 38) {
    socket.emit('keyEvent', {url: url});
  }

  if (e.keyCode == 39 || e.keyCode == 40) {
    socket.emit('keyEvent', {url: url});
  }
});

$(function() {
  let socket = io('http://34.227.11.223:3000');
  $('form').submit(function(e) {
    e.preventDefault();
    socket.emit('chat message', $('#m').val());
    $('#m').val('');
    return false;
  });
  socket.on('chat message', function(msg) {
    if (msg.length > 0) {
      $('#messages').append($('<li>').text(msg));
      window.scrollTo(0, document.body.scrollHeight);
    }
  });
  /* $('#hola').on('click', function(e) {
    e.preventDefault();
    // console.log('hola');
    socket.emit('add user', 'Juanita');
  });
  socket.on('user joined', function(data) {
    console.log(data.username);
  })*/
});

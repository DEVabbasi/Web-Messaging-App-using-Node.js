
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
    console.log('a user connected');
    // socket.emit('message', msg);

    socket.on('message', function(msg){
      console.log('message: ' + msg);
    });
});

http.listen(port, function(){
  console.log('listening on *:' + port);
  
});
    
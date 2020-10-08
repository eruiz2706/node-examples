
var express =require('express');
var app     =express();
var server  =require('http').Server(app);
var io      =require('socket.io')(server);



app.get('/holamundo',function(req,res){
  res.status(200).send('Hola mundo desde una ruta');
})

var messages=[ {
  id : 1,
  text:'Bienvenido al chat privado de socket.io',
  nickname:'Bot - Eduardo Ruiz'
}];
var con=0;
io.on('connection',socket=>{
    console.log('usuario conectado'+' '+socket.handshake.address);
    con++;
    socket.on('llegada',function(data){
      console.log("llegada=>"+data);
      io.sockets.emit('messages',data);
    });
});

/*io.on('connection', function(socket){
  console.log('usuario conectado'+' '+socket);
  socket.on('llegada', function(data){
    socket.emit('messages', "dafasdf");
  });
});*/

/*io.on('connection',function(socket){
  var messages=[ {
    id : 1,
    text:'Bienvenido al chat privado de socket.io',
    nickname:'Bot - Eduardo Ruiz'
  }];
  io.socket.emit();

  console.log('El nodo con Ipsdd '+socket.handshake.address+' se ha conectado');
});*/

server.listen(8081,function(){
  console.log('servidor funcionando en');
})

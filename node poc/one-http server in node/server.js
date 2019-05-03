var http = require('http');
var fs = require('fs');


var currentDate = new Date();

var html = fs.readFileSync('./index.html');

//create a server object:
http.createServer(function (req, res) {
 res.writeHead(200, {'Content-Type': 'text/html'}); // http header
var url = req.url;
 switch(url){
     case '/monday': 
     case '/tuesday':
     case '/wednesday': 
     case '/thursday':
     res.write('<h1>Welcome today is : ' + url.slice(1).charAt(0).toUpperCase() + url.slice(2) +'<h1>'); //write a response
     break;
     case '/': res.write( html ); //write a response
     break;
     default : res.write('<h1>Not Found</h1>');
 }
}).listen(3000, function(){
 console.log("server start at port 3000"); //the server object listens on port 3000
});
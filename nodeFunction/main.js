// function say(word){
//     console.log(word);
// }
// function execute(someFunction,value){
//     someFunction(value);
// }
// execute(say,'hello');

// 函数传递是如何让HTTP服务器
// var http = require('http');
// http.createServer(function(req,res){
//     res.writeHead(200,{"Content-Type": "text/plain"});
//     res.write('hello World');
//     res.end();
// }).listen(8000);

var http = require("http");

function onRequest(request, response) {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.write("Hello World");
  response.end();
}

http.createServer(onRequest).listen(8888);

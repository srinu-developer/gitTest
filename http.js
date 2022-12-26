// const http = require('http');

// http.createServer(function(req,res){
//     res.write("Hi, welcome to this page");
//     res.end();
    
// }).listen(8080);

const http = require("http");

http.createServer(function(req,res){
    res.write("Hello world");
    res.end();
}).listen(9090);
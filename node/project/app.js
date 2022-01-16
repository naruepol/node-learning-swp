http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.end('yes you can\n');
}).listen(8000);
console.log("server running port 8000");

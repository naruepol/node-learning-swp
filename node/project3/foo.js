foo = function() {
    console.log('foo!');
}

handler = function (req, res){
    res.writeHead(200, { 'Content-Type' : "text/plain" });
    res.end("yes you can\n");
}
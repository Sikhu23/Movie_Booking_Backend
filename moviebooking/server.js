const http = require('http');

http.createServer((req,res)=>{
    if(req.method==="GET" && req.url==="/movies"){
        res.writeHead(200);
        res.end("All Movies Data in JSON format from Mongo DB");
    }
    else if(req.method==="GET" && req.url==="/genres"){
        res.writeHead(200);
        res.end("All Genres  Data in JSON format from Mongo DB");
    }
    else if(req.method==="GET" && req.url==="/artists"){
        res.writeHead(200);
        res.end("All Artists Data in JSON format from Mongo DB");
    }

}).listen(9000);
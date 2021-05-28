const http = require('http');
const httpServer = new http.Server();

httpServer.on('request', (request, response) => {
    response.writeHead(200, {"Content-type":"application/json"});
    response.end('node v16');
});

httpServer.listen(3000, function(){
    console.log("server listen on 3000")
});

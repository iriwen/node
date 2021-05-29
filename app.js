const http = require("http");
const { CLIENT_RENEG_LIMIT } = require("tls");
const server = http.createServer((request, response) => {
    let data = "";
    request.on("data", function (chunk) {
        data += chunk;
        console.log(data);
    });

    request.on("end", () => {
        var method = request.method;
        var headers = JSON.stringify(request.headers);
        var httpVersion = request.httpVersion; 

        var url = request.url;
        response.writeHead(200, {"Content-Type":"text/html"});
        let responseData =
            method + "[d]" + headers + "[d]" + httpVersion + "[d]" + url;
        response.end(responseData);
    });
});

server.listen(3333, () => {
    console.log("server started on 3333!");
});

server.on("connection", () => {
    console.log("client connected !");
});

server.on("close", () => {
    console.log("server closed !");
});

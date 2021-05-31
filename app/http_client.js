const http = require("http");
const { CLIENT_RENEG_LIMIT } = require("tls");
let responseData = "";
http.request(
    {
        'host': "localhost",
        'port': "3333",
        'method': "get",
    },
    (response) => {
        response.on("data", function (chunk) {
            responseData += chunk;
            console.log(responseData +"\n");
        });

        response.on("end", function () {
            console.log(responseData);
        });
    }).end();

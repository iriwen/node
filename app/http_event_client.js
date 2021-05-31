const http = require("http") ;

const option = {'host':"localhost","port":"3333"};

let responseData = '';
const clientRequest = http.request(option);

clientRequest.on("response",function(response){

      response.on("data",function(chunk){
           responseData += chunk;
      })
      response.on("close",function(){
          console.log("close !");
          console.log(responseData);
      })
}).end();


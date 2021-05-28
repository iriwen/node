const http = require('http');
const server = http.createServer((request,response)=>{
    let data ='' ;
    request.on('data',function(chunk){
        data+=chunk;
        console.log(data);
    }) ;

    request.on('end',()=>{


    });

});
server.listen(3333,function(){
  console.log("server started on 3333!") ;
});

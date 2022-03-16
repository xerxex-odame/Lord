const http= require('http');

const server = http.createServer(function(request,response){
    if(request.method ==="GET"){
 //console.log('we got the request'); 
  response.end(`We got your ${request.method} message.We will revert.`); 
    }else if(request.method === 'POST'){
        response.end(`We got your ${request.method} message.We will revert.`);
    }else if(request.method === 'PATCH'){
        response.end(`We got your ${request.method} message.We will revert.`);  
    }else if (request.method === 'PUT'){
        response.end(`We got your ${request.method} message.We will revert.`);
    }else if(request.method === 'DELETE'){
        response.end(`We got your ${request.method} message.We will revert.`);
    }else{
        response.end(`We cant handle your request`);
    }
});

server.listen(5052);

//http verbs or methods
//POST
//GET
//PATCH/PUT
//DELETE

//all comes 2gether called CRUD OPERATIONS
var http = require('http');
const PORT=80; 

//We need a function which handles requests and send response
function handleRequest(request, response){
    fqdn = request.headers['host'];
    response.writeHead(302, {
	'Location': 'http://www.' + fqdn
    });
    response.end();
    //response.end('It Works!! Path Hit: ' + request.url);
}

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});



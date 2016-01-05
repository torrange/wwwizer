var http = require('http');
const PORT=80; 


function handleRequest(request, response){
    fqdn = request.headers['host'];
    response.writeHead(302, {
	'Location': 'http://www.' + fqdn
    });
    response.end();
}

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
    console.log("Server listening on: http://localhost:%s", PORT);
});



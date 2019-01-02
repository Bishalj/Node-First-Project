var http = require('http');
var server = http.createServer(engine);

server.listen(1337, function() {
    console.log('server was hit by a request');
});

// server.createServer(engine).listen(1337);

function engine(request, response){
    // console.log(response);
    response.writeHead(200,{'Content-Type': 'text/plain'});
    response.end('Hey Server is up.., Request page URL: '+ request.url);
}
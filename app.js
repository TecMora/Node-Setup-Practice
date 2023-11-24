var http = require('http');
let port = 8081

const server = http.createServer(function (request, response) {
    console.log(request)
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello People 2');
})

server.listen(port);

console.log(`Server running at http://127.0.0.1:/${port}`);
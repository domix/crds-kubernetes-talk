var http = require('http');

const NAME = process.env.NAME || "Shy user";
const EMAIL = process.env.EMAIL || 'no-email@localhost';
const DOMAIN = process.env.DOMAIN || 'localhost';

var handleRequest = function(request, response) {
  console.log('Request URI: ' + request.url);
  response.writeHead(200, {"Content-Type": "application/json"});
  var json = JSON.stringify({ 
      name: NAME,
      email: EMAIL,
      domain: DOMAIN
    });
  response.end(json);
};

var port = 80;

var www = http.createServer(handleRequest);
console.log('Servidor de Node listo. Escuchando en ' + port);
www.listen(port);
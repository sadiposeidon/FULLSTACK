// CommonJS
// let http require('http');

// ES Modlules
import http from 'http';

const content = 'World'

http.createServer(function(req, res) {
  const url = req.url;

if(url == '/'){
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(`Hello ${content}`);
} else {
  res.statusCode = 500;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ error: 'Server error' }));
}

}).listen(8080);

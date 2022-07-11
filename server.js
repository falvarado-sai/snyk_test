const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end(`Hello, ${process.env.HELLO}!`);
  console.log('got a request!');
}

console.log('Hello world!');

const server = http.createServer(requestListener);
server.listen(8080);


//Assignment
const http = require('http');
const server = http.createServer((req, res) => {
  console.log('Irfan Z Samsi'); 

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, My name is Irfan Z Samsi!');
});

server.listen(4000, () => {
  console.log('Server is running on port 4000.');
});
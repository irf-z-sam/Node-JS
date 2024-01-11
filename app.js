
//6. Assignment
// const http = require('http');
// const server = http.createServer((req, res) => {
//   console.log('Irfan Z Samsi'); 

//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('Hello, My name is Irfan Z Samsi!');
// });

// server.listen(4000, () => {
//   console.log('Server is running on port 4000.');
// });

//Assignment 7
const http = require('http');
const server = http.createServer((req, res) => {
  if (req.url === '/about') {
    res.end('<h1>Welcome to About Us page</h1>');
  } else if (req.url === '/home') {
    res.end('<h1>Welcome home</h1>');
  } else if (req.url === '/node') {
    res.end('<h1>Welcome to my Node Js project</h1>');
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
// const http = require("http");

// const routes = require("./routes");

// console.log(routes.someText);

// const server = http.createServer(routes.handler);

// server.listen(6100);

const http = require("http");

const routes = require("./routes");

console.log(routes.someText);

const server = http.createServer(routes.handler);

server.listen(9000);
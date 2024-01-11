
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
// const http = require('http');
// const server = http.createServer((req, res) => {
//   if (req.url === '/about') {
//     res.end('<h1>Welcome to About Us page</h1>');
//   } else if (req.url === '/home') {
//     res.end('<h1>Welcome home</h1>');
//   } else if (req.url === '/node') {
//     res.end('<h1>Welcome to my Node Js project</h1>');
//   }
// });

// const port = 3000;
// server.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

//Assignment 8
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write("<body>");

    // Read messages from the file
    const messages = fs.readFileSync("message.txt", "utf8").split("\n").filter(message => message.trim() !== "");

    res.write(
      '<form action="/message" method="POST"><input type="text" name="message"><button type="submit">Submit</button></form>'
    );

    // Display existing messages in reverse order
    res.write("<h2>Messages:</h2>");
    res.write("<ul>");
    for (let i = messages.length - 1; i >= 0; i--) {
      res.write(`<li>${messages[i]}</li>`);
    }
    res.write("</ul>");

    res.write("</body>");
    res.write("</html>");
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];

      // Append the new message to the file
      fs.appendFileSync("message.txt", `${message}\n`);

      res.statusCode = 302;
      res.setHeader("Location", "/");
      return res.end();
    });
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>First Page</title></head>");
  res.write("<body><h1>Welcome to my Node.js Server!</h1></body>");
  res.write("</html>");
  return res.end();
});

server.listen(8500, () => {
  console.log("Server listening on port 8500");
});
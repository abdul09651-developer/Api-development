const http = require('http');

// Create an HTTP server that listens on port 3000 and logs "Hello World" for every request
// 127.0.0.1:3000 or localhost:3000

http.createServer((req, res) => {

    console.log(req.url);
    console.log(req.method);

    if (req.url === "/products" && req.method === "GET") {
        res.end("Get Product Data");
    }
    else if (req.url === "/products" && req.method === "POST") {
        res.end("Created Products Data");
    }
    else if (req.url === "/users" && req.method === "POST") {
        res.end("Created Users Data");
    }
}).listen(3000);

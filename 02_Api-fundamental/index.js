const http = require('http');
const fs = require('fs');
const url = require('url');

// Create an HTTP server that listens on port 3000 and logs "Hello World" for every request
// 127.0.0.1:3000 or localhost:3000

http.createServer((req, res) => {

    let parsedUrl = url.parse(req.url, true);
    console.log(parsedUrl);
    let products = fs.readFileSync("./products.json", "utf-8");

    if (parsedUrl.pathname === "/products" && req.method === "GET" && parsedUrl.query.id == undefined) {
        res.end(products);
    }
    else if (parsedUrl.pathname === "/products" && req.method === "GET" && parsedUrl.query.id != undefined) {

        let productArray = JSON.parse(products);
        let product = productArray.find((product) => {
            return product.id == parsedUrl.query.id;
        })

        if (product != undefined) {
            res.end(JSON.stringify(product));
        }
        else {
            res.end(JSON.stringify({ message: "Product not found" }));
        }
    }
    else if (parsedUrl.pathname === "/products" && req.method === "POST") {
        let product = "";

        req.on("data", (chunk) => {
            product = product + chunk;
        })

        req.on("end", () => {
            let productArray = JSON.parse(products);
            let newProduct = JSON.parse(product);

            productArray.push(newProduct);

            fs.writeFile("./products.json", JSON.stringify(productArray), (err)=> {
                if(err==null){
                    res.end(JSON.stringify({message: "New Product added successfully"}));
                }
            })
        })
    }

    }).listen(3000);

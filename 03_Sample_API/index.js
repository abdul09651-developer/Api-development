const http = require('http');
const fs = require('fs');
const url = require('url');

http.createServer((req, res) => {
    let cart = fs.readFileSync('./carts.json', 'utf-8');

    const parsedUrl = url.parse(req.url, true);
    console.log(parsedUrl);

    if (parsedUrl.pathname == "/cart" && req.method == "GET" && parsedUrl.query.id == undefined) {
        res.end(cart);

    }
    else if (parsedUrl.pathname == "/cart" && req.method == "GET" && parsedUrl.query.id != undefined) {
        let cartArray = JSON.parse(cart);
        console.log(cartArray);

        let cartItem = cartArray.find((cartitem) => {
            return cartitem.id == parsedUrl.query.id;
        })

        if (cartItem != undefined) {
            res.end(JSON.stringify(cartItem));
        }
        else {
            res.end(JSON.stringify({ message : "Cart item not found" }));
        }
    }
    else if (parsedUrl.pathname == "/cart" && req.method == "POST") {
        let body = "";

        req.on("data", (chunk) => {
            body += chunk;
        });

        req.on("end", () => {
            let cartArray = JSON.parse(cart);
            let newCartItem = JSON.parse(body);

            cartArray.push(newCartItem);

            fs.writeFileSync('./carts.json', JSON.stringify(cartArray));

            res.end(JSON.stringify({ message : "Cart item added successfully" }));
        });
    }


}).listen(8000);
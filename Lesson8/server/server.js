const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.use(express.json());
app.use('/', express.static('./public'));

const productsJSON = path.resolve(__dirname, './db/catalogProducts.json');

app.get('/api/products', (req, res) => {
    fs.readFile(productsJSON, 'utf-8', (err, data) => {
        if (err) res.send(JSON.stringify({
            result: 0,
            err
        }));
        else res.send(data);
    });
});

app.get('/api/cart', (req, res) => {
    fs.readFile(cartJSON, 'utf-8', (err, data) => {
        if (err) res.send(JSON.stringify({
            result: 0,
            err
        }));
        else res.send(data);
    });
});

app.post('/api/cart', (req, res) => {
    fs.readFile(cartJSON, 'utf-8', (err, data) => {
        if (err) res.send(JSON.stringify({
            result: 0,
            err
        }));
        else {
            const cart = JSON.parse(data);
            cart.contents.push(req.body);

            fs.writeFile(cartJSON, JSON.stringify(cart), (err) => {
                if (err) res.end(JSON.stringify({
                    result: 0,
                    err
                }));
                else res.end(JSON.stringify({
                    result: 1
                }));
            });
        }
    });
});

// app.get('*');

app.listen(5555, () => {
    console.log('Server started!');
});
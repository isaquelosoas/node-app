const express = require('express');
const routes = express.Router();
const Product = require('./controlers/auth.js');
routes.get('/products', Product.index);
routes.post('/products', Product.store);
routes.get('/products/:id', Product.show);
routes.put('/products/:id',Product.update);
routes.delete('/products/:id', Product.destroy);
module.exports = routes;
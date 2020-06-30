const express = require('express');
const routes = express.Router();
const Product = require('./controlers/auth.js');
routes.get('/products', Product.index);
module.exports = routes;
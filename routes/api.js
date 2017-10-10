//Dependencies
var express = require('express');
var router = express.Router();

var Product = require('../models/product');

//Routes
Product.methods(['get', 'put', 'post', 'delete'])
Product.register(router, '/products');

//Return Router
module.exports = router;
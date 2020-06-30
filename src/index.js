const express = require('express');
const mongoose = require('mongoose', );
const app = express();
mongoose.connect('mongodb://localhost:27017/admin', {useNewUrlParser:true,  useUnifiedTopology: true } );
require('./models/Product.js');
const Product = mongoose.model('Product');
app.use('/api', require('./routes.js'));


app.listen(3001);

const express = require('express');
const mongoose = require('mongoose', );
const { json } = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());
//app.use(cors());
mongoose.connect('mongodb://localhost:27017/admin', {useNewUrlParser:true,  useUnifiedTopology: true } );
require('./models/Product.js');
const Product = mongoose.model('Product');
app.use('/api', require('./routes.js'));


app.listen(3001);

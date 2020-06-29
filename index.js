const express = require('express');
const app = express();
app.get('/',(req, res) =>{
    res.send('Hello Barbecue!');
});
app.listen(3001);
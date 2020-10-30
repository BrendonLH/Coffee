'use strict';
const express = require('express');
const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json);


module.exports = {
    app, 
    start: (port) => app.listen(port, console.log('server is running on port:', port))
}


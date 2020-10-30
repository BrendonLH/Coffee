'use strict';

require('dotenv').config();
const server = require('./server.js');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
// if DB connected, will give us a console.log
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err));


server.start(PORT);
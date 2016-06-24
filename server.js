'use strict'

var express = require('./config/express'); // same app in express.js is assigned to app

var app = express.init();
app.listen('8090',function(error)
{
    if(error)
    {
        console.log("Error: while starting server on port 8090");
    }
    else {
        console.log("Application started and running on port 8090");
    }
})

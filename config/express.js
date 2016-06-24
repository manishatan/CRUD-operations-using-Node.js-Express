'use strict'

var express = require('express'); // getting express framework
// its a good practice to write a wrapper around express - wrapper class design pattern

var bodyParser = require('body-parser');
module.exports.init = function() {
    var app = express();
    this.initializeBodyParser(app); // only after this initialize routes
    this.initializeRoutes(app); // routes and controllers always come at the end
    return app;
};


module.exports.initializeRoutes = function(app){
    require('../modules/core/server/core.server.routes')(app); // loading routes

}

module.exports.initializeBodyParser = function(app){
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }))


}
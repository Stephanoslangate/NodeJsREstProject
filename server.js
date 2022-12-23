var express = require('express')
  , http = require('http')
  , path = require('path');

var app = express();
var fs = require("fs");


var UserManager = require('./userManager').UserManager;
var userManagerService = new UserManager(app);

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})
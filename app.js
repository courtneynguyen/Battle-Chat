var express = require('express');
GLOBAL.host = "api.hipchat.com";
GLOBAL.api_token = "hXQ62SDWteTXEMEuD78VRFvZlmwDiTgWwEpVFc7H";
module.exports = function(){

	var app = express();
	var serverController = require('./serverController.js')(app);

	app.listen(3000, 'localhost');

}();

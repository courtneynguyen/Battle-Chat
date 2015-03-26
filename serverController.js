module.exports = function(app){
	var rp = require('request-promise');
	app.get('/', function(req, res){

		rp({
			method:'GET',
			uri:'https://'+host+'/v2/room',
			qs: {
				auth_token:api_token,
				auth_test:true
			}
		}).then(function(data){
			console.log('SUCCESS!!!!!!!!');
			res.send(data);
		})
		.catch(function(err){
			// TODO -- if the token is invalid, then make a new request to get a new session token
			console.log('ERROR ================================');
			res.send(err);
		});;
		
	});

	app.post('/oauth', function(req, res){

	});

	app.get('/oauth', function(req, res){
		console.log('hello');
		rp({
			method:'GET',
			uri:'https://'+host + '/v2/room?auth_token=' + api_token
		}).then(function(response){
			console.log('OAUTH RESPONSE =======================================');
			console.log(response);
			res.send(response);
		})
		
	});
};
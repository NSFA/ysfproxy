var http = require('http');
var options = {
	hostname : 'localhost',
	port : 9000,
	path :'/api/list'
}

options = Object.assign({}, options, {
	method : 'GET'
});



http.get('http://localhost:9000/api/list', function(res, body){
	res.on("data", function(chunk) {
		console.log("BODY: " + chunk);
	});
})
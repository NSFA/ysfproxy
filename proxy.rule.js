var  http = require('http');
var  options = {
	hostname : 'localhost',
	port : 9000,
	method : 'GET'
};

module.exports = {
    shouldUseLocalResponse : function(req, reqBody){
  		if(req.url == 'http://test.ysf.space/api/list' ){
  			return true
  		}else{
  			return false;
  		}
    },


    dealLocalResponse : function(req, reqBody, callback){
  		http.get('http://localhost:9000/api/list', function(res){
  			res.on('data', function(chunck){
  				callback(200, {'content-type':'application/json'}, chunck.toString());
  			})
  		})
    }
};

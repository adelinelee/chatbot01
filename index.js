//this section list the required libraries
var express = require("express");
//create an instance of express server
var app = express();

//start the express server to listen to a port in the server
app.get("/",function(req,res){
	res.send('<h1>This is my web app');
});


	var listener = app.listen(process.env.PORT,process.env.IP,function(){
		console.log("server has started");
	    console.log('Listening on port ' + listener.address().port);
});

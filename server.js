var express = require('express');
var decoder = require('./decoder.js');
var encoder = require('./encoder.js');

var app = express.createServer(express.logger());

app.use(express.bodyParser());
app.use(express.static('public'));

function successHandler(response) {
	return function(result) {
		response.json(result);
	};
}

function errorHandler(response, next) {
	return function(err) {
		response.send(500, 'Something went wrong');
	};
}

app.post('/encode', function(request, response, next) {
	encoder.encodeSentence(request.body.sentence,
		successHandler(response),
		errorHandler(response, next));
});

app.post('/decode', function(request, response, next) {
	decoder.decodeSentence(request.body.sentence,
		successHandler(response),
		errorHandler(response, next));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
	console.log("Listening on " + port);
});

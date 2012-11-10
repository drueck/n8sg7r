var encoder = require('./encode.js');
var decoder = require('./decode.js');

var sentence = 'Silly Sampton eats plantlike petunias';

encoder.encodeSentence(sentence, function(encoded) {
	console.log(encoded);
	decoder.decodeSentence(encoded, function(decoded) {
		console.log(decoded);
	});
});


var _ = require('underscore');

function encode(input) {
	return input[0] + (input.length-2).toString() + input[input.length-1];
}

function encodeSentence(sentence) {
	return _.map(sentence.split(" "), function(word) {
		return encode(word);
	}).join(" ");
}

console.log(encodeSentence("Silly sampton likes plantlike patunas"));
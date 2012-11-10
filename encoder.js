var _ = require('underscore');

module.exports = function() {

	function encodeWord(word) {
		if(word.length < 3)
			return word;
		else
			return word[0] + (word.length-2).toString() + word[word.length-1];
	}

	return {

		encodeSentence: function(sentence, success, fail) {
			var result = _.map(sentence.split(" "), function(word) {
				return encodeWord(word);
			}).join(" ");
			success(result);
		}

	};

}();


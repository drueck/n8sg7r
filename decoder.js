var _ = require('underscore');
var exec = require('child_process').exec;
var async = require('async');

module.exports = function() {

	// searches the file for the given regex string
	// and returns an array of matching lines with a 100 result limit
	function grep(search, file, callback) {
		var command = 'grep -E -m 100 ' + search + ' ' + file;
		exec(command, function(stderr, stdout, stdin) {
			var results = [];
			if(stdout) {
				results = stdout.split("\n");
				results.pop();
			}
			callback(results);				
		});
	}

	function decodeWord(word, callback) {
		if(word.length < 3) {
			callback(null, word);
			return;
		}
		var randomResult = '';
		var search = '^' + word[0] + '.{' + word.slice(1,-1) + '}' + word[word.length-1] + '$';
		grep(search, 'words-list', function(results) {
			if(results && results.length > 0)
				randomResult = results[Math.floor(Math.random() * results.length)];
			callback(null, randomResult);
		});
	}

	return { 

		decodeSentence: function(sentence, success, fail) {
			async.map(sentence.split(' '), decodeWord, function(err, results) {
				if(err)
					fail(err);
				else
					success(results.join(' '));
			});
		}

	};

}();

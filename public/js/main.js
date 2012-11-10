$(function() {
	$("#encode").submit(encode);
	$("#decode").submit(decode);
});

function encode() {
	var params = $("#encode").serialize();
	$.post('/encode', params, loadEncoded, 'json');
	return false;
}

function decode() {
	$.post('/decode', $("#decode").serialize(), loadDecoded, 'json');
	return false;
}

function loadEncoded(data) {
	$("#decode input[name='sentence']").val(data);
}

function loadDecoded(data) {
	$("#encode input[name='sentence']").val(data);
}

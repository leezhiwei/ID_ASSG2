/*global respget:writable, respsend:writable, prevscores:writable, resp:writable*/
function getquestions(){   // eslint-disable-line no-unused-vars
	var settings = {
		"async": true,
		"crossDomain": true,
		"url": "https://assg2db1-0e7d.restdb.io/rest/question",
		"method": "GET",
		"headers": {
			"content-type": "application/json",
			"x-apikey": "63e068f23bc6b255ed0c46d3",
			"cache-control": "no-cache"
		}
	};
	$.ajax(settings).done(function (response) {
		respget = response;
		console.log(respget);
	});
}
function sendquestion(data){  // eslint-disable-line no-unused-vars
	var settings = {
		"async": true,
		"crossDomain": true,
		"url": "https://assg2db1-0e7d.restdb.io/rest/question",
		"method": "POST",
		"headers": {
			"content-type": "application/json",
			"x-apikey": "63e068f23bc6b255ed0c46d3",
			"cache-control": "no-cache"
		},
		"processData": false,
		"data": JSON.stringify(data)
	};  
	$.ajax(settings).done(function (response) {
		respsend = response;
		console.log(respsend);
	});
}
function getscores(){  // eslint-disable-line no-unused-vars
	var settings = {
		"async": true,
		"crossDomain": true,
		"url": "https://assg2db1-0e7d.restdb.io/rest/user-scores",
		"method": "GET",
		"headers": {
			"content-type": "application/json",
			"x-apikey": "63e068f23bc6b255ed0c46d3",
			"cache-control": "no-cache"
		}
	};  
	$.ajax(settings).done(function (response) {
		prevscores = response;
		console.log(prevscores);
	});
}
function sendscore(data){  // eslint-disable-line no-unused-vars
	var settings = {
		"async": true,
		"crossDomain": true,
		"url": "https://assg2db1-0e7d.restdb.io/rest/user-scores",
		"method": "POST",
		"headers": {
			"content-type": "application/json",
			"x-apikey": "63e068f23bc6b255ed0c46d3",
			"cache-control": "no-cache"
		},
		"processData": false,
		"data": JSON.stringify(data)
	};
	$.ajax(settings).done(function (response) {
		resp = response;
		console.log(resp);
	});
}
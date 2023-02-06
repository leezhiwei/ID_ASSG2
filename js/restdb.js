function getquestions(){
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
  }
  $.ajax(settings).done(function (response) {
    respget = response;
  });
}
function sendquestion(data){
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
  }  
  $.ajax(settings).done(function (response) {
    respsend = response;
  });
}
function getscores(){
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
  }  
  $.ajax(settings).done(function (response) {
    prevscores = response;
  });
}
function sendscore(data){
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
  }
  $.ajax(settings).done(function (response) {
    resp = response;
    console.log(response);
  });
}
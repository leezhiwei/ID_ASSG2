function getquestions(){
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://assignment2-3ebe.restdb.io/rest/question",
    "method": "GET",
    "headers": {
      "content-type": "application/json",
      "x-apikey": "63d1fd77a95709597409cfa6",
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
    "url": "https://assignment2-3ebe.restdb.io/rest/question",
    "method": "POST",
    "headers": {
      "content-type": "application/json",
      "x-apikey": "<your CORS apikey here>",
      "cache-control": "no-cache"
    },
    "processData": false,
    "data": JSON.stringify(data)
  }
  $.ajax(settings).done(function (response) {
    respsend = response;
  });
}
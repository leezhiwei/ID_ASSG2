var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://assignment2-3ebe.restdb.io/rest/question",
    "method": "GET",
    "headers": {
      "content-type": "application/json",
      "x-apikey": "<your CORS apikey here>",
      "cache-control": "no-cache"
    }
  }
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });
  var jsondata = {"field1": "xyz","field2": "abc"};
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
  "data": JSON.stringify(jsondata)
}

$.ajax(settings).done(function (response) {
  console.log(response);
});

const { parse } = require('path');
const request = require('request');
console.log("The sunset in hawaii is at:... ")
request('https://jsonplaceholder.typicode.com/users/1', function (error, response, body) {
  if(!error && response.statusCode ==200){
      const parsedData=JSON.parse(body);
      console.log(parsedData.name + " lives in " + parsedData.address.city);
  }
});
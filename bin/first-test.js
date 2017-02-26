var http = require("http");
var fs = require("fs")
var sleep = require('sleep');

http.createServer(function (request, response) {

    // Send the HTTP header
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    response.writeHead(200, {'Content-Type': 'text/html','Cache-Control': 'max-age=900', 'Cache-Control': 'no-transform'});
    var file="desktop.html"
    if(request.headers['user-agent'].includes("Mobile")) {
        file = "mobile.html";
        console.log("mobile");
    }

    //Sync file reader example
    var data = fs.readFileSync("../"+file)
    console.log("Serving: ../"+file)
    // Send the response body as "Hello World"
    response.end(data.toString());
}).listen(8000);

// Console will print the message
console.log('Server running at http://127.0.0.1:8000/');

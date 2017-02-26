var https = require('https');

// Options to be used by request
var options = {
    host: 'api.mercadolibre.com',
    path: '/users/10000'
};

// Callback function is used to deal with response
var callback = function(response){
    // Continuously update stream with data
    var body = '';
    response.on('data', function(data) {
        body += data;
    });

    response.on('end', function() {
        // Data received completely.
        console.log(body);
    });
}
// Make a request to the server
var req = https.request(options, callback);
req.end();
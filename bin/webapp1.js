var express = require('express');
var cookieParser = require('cookie-parser')

var app = express();
app.use(cookieParser());

app.get('/gabe:id', function (req, res) {
    res.send('Hello Gabe'+ + req.params.id);
})
app.get('/:id', function (req, res) {
    res.send('Hello World '+ req.params.id);
})

var server = app.listen(8000, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})